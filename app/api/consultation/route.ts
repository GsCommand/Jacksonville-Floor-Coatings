import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(40),
  email: z.union([z.string().trim().email(), z.literal("")]).optional().default(""),
  zip: z.string().trim().max(12).optional().default(""),
  projectType: z.string().trim().max(100).optional().default("Not specified"),
  squareFootage: z.string().trim().max(40).optional().default(""),
  details: z.string().trim().max(4000).optional().default(""),
  company: z.string().trim().max(200).optional().default(""),
});

export async function POST(request: Request) {
  try {
    const input = LeadSchema.parse(await request.json());

    // Honeypot: bots frequently fill fields hidden from human visitors.
    if (input.company) return NextResponse.json({ ok: true });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { error: "Online quote requests are not connected yet. Please email hello@jacksonvillefloorcoatings.com." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      ...(input.email ? { replyTo: input.email } : {}),
      subject: `New floor quote — ${input.projectType}${input.zip ? ` — ${input.zip}` : ""}`,
      text: [
        `Name: ${input.name}`,
        `Phone: ${input.phone}`,
        `Email: ${input.email || "Not provided"}`,
        `ZIP: ${input.zip || "Not provided"}`,
        `Project: ${input.projectType}`,
        `Approx. square feet: ${input.squareFootage || "Not provided"}`,
        "",
        "Details:",
        input.details || "No additional details",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
    console.error("Consultation submission failed", error);
    return NextResponse.json({ error: "Unable to send the request right now. Please email hello@jacksonvillefloorcoatings.com." }, { status: 500 });
  }
}
