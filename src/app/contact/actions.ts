"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "sales@zigron.com";
const MIN_SUBMIT_TIME_MS = 3000; // Reject if form submitted in < 3 seconds (bot)
const MAX_MESSAGE_LENGTH = 5000;

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  formData: FormData
): Promise<ContactResult> {
  // ── Bot protection ─────────────────────────────────────────────────
  // 1. Honeypot — hidden field must be empty
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    // Bot filled the hidden field — silently "succeed" to not tip them off
    return { success: true };
  }

  // 2. Timestamp — form must take > 3 seconds to fill
  const loadedAt = parseInt(formData.get("_t") as string, 10);
  if (!loadedAt || Date.now() - loadedAt < MIN_SUBMIT_TIME_MS) {
    return { success: true }; // Silent reject
  }

  // ── Validation ─────────────────────────────────────────────────────
  const firstName = (formData.get("firstName") as string)?.trim();
  const lastName = (formData.get("lastName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim() || "Not provided";
  const interest = (formData.get("interest") as string)?.trim() || "Not specified";
  const message = (formData.get("message") as string)?.trim();
  const budget = (formData.get("budget") as string)?.trim() || "Not specified";
  const timeline = (formData.get("timeline") as string)?.trim() || "Not specified";

  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      success: false,
      error: `Message too long (max ${MAX_MESSAGE_LENGTH} characters).`,
    };
  }

  // ── Interest label mapping ─────────────────────────────────────────
  const interestLabels: Record<string, string> = {
    iot: "IoT Services",
    ai: "AI & Data Services",
    engineering: "Engineering Services",
    expertise: "Industry Expertise",
    partnership: "Partnership",
    other: "Other",
  };
  const interestLabel = interestLabels[interest] || interest;

  // ── Send formatted email via Resend ────────────────────────────────
  try {
    await resend.emails.send({
      from: "Zigron Website <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: email,
      subject: `New Contact: ${firstName} ${lastName} — ${interestLabel}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background: #f4f4f5; }
    .container { max-width: 600px; margin: 0 auto; padding: 32px 16px; }
    .card { background: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e4e4e7; }
    .header { text-align: center; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 2px solid #C0272D; }
    .header h1 { color: #C0272D; font-size: 20px; margin: 0 0 4px 0; }
    .header p { color: #71717a; font-size: 13px; margin: 0; }
    .row { display: flex; padding: 12px 0; border-bottom: 1px solid #f4f4f5; }
    .label { color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; min-width: 120px; padding-top: 2px; }
    .value { color: #18181b; font-size: 14px; line-height: 1.5; }
    .message-box { background: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 16px; margin-top: 16px; }
    .message-box p { color: #18181b; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap; }
    .footer { text-align: center; margin-top: 24px; color: #a1a1aa; font-size: 11px; }
    .reply-btn { display: inline-block; background: #C0272D; color: #fff; text-decoration: none; padding: 10px 24px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <h1>New Contact Form Submission</h1>
        <p>${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", timeZoneName: "short" })}</p>
      </div>

      <div class="row">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(firstName)} ${escapeHtml(lastName)}</div>
      </div>

      <div class="row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #C0272D;">${escapeHtml(email)}</a></div>
      </div>

      <div class="row">
        <div class="label">Company</div>
        <div class="value">${escapeHtml(company)}</div>
      </div>

      <div class="row">
        <div class="label">Interest</div>
        <div class="value">${escapeHtml(interestLabel)}</div>
      </div>

      <div class="row">
        <div class="label">Budget</div>
        <div class="value">${escapeHtml(budget)}</div>
      </div>

      <div class="row" style="border-bottom: none;">
        <div class="label">Timeline</div>
        <div class="value">${escapeHtml(timeline)}</div>
      </div>

      <div style="margin-top: 20px;">
        <div class="label" style="margin-bottom: 8px;">Message</div>
        <div class="message-box">
          <p>${escapeHtml(message)}</p>
        </div>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${escapeHtml(email)}" class="reply-btn">Reply to ${escapeHtml(firstName)}</a>
      </div>
    </div>

    <div class="footer">
      Sent from zigron.com contact form
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      success: false,
      error: "Something went wrong. Please email us directly at sales@zigron.com.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
