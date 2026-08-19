import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email(),
  phone: z.string().trim().max(40).optional().default(""),
  projectType: z.string().trim().max(100).optional().default("Not specified"),
  details: z.string().trim().max(4000).optional().default(""),
});

export async function POST(request: Request) {
  try {
    const input = LeadSchema.parse(await request.json());
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return NextResponse.json({ error: "The consultation form is not connected yet. Please configure the lead email environment variables." }, { status: 503 });
    }
    const resend = new Resend(apiKey);
    await resend.emails.send({ from, to, replyTo: input.email, subject: `New floor consultation — ${input.projectType}`, text: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone || "Not provided"}\nProject: ${input.projectType}\n\nDetails:\n${input.details || "No additional details"}` });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
    console.error("Consultation submission failed", error);
    return NextResponse.json({ error: "Unable to send the request right now." }, { status: 500 });
  }
}
