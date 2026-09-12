"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send request.");
      form.reset();
      setStatus("success");
      setMessage("Thanks — your floor project details were sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send request.");
    }
  }

  return (
    <form className={`consultation-form ${compact ? "consultation-form-compact" : ""}`} onSubmit={submit}>
      <div className="form-grid">
        <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required placeholder="(904) 555-0123" /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label><span>ZIP code</span><input name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="32256" /></label>
        <label><span>Project type</span><select name="projectType" defaultValue="Garage floor coating"><option>Garage floor coating</option><option>Epoxy flooring</option><option>Polyaspartic floor coating</option><option>Metallic / decorative resin</option><option>Residential resin floor</option><option>Commercial floor coating</option><option>Not sure yet</option></select></label>
        <label><span>Approx. square feet</span><input name="squareFootage" inputMode="numeric" placeholder="500" /></label>
        <label className="form-span"><span>Tell us about the floor</span><textarea name="details" rows={compact ? 3 : 5} placeholder="Existing coating or bare concrete, cracks or damage, how the space is used, and the finish you have in mind." /></label>
        <label aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}><span>Company</span><input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-actions">
        <button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request a quote"}</button>
        <p className={`form-status form-status-${status}`} aria-live="polite">{message}</p>
      </div>
    </form>
  );
}
