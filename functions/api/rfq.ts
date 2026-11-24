interface Env {
  RESEND_API_KEY: string;
  RFQ_TO_EMAIL: string;
  RFQ_FROM_EMAIL: string;
  TURNSTILE_SECRET_KEY?: string;
}

interface RfqPayload {
  source?: string;
  fullName?: string;
  company?: string;
  phone?: string;
  email?: string;
  executionScope?: string;
  requirementType?: string;
  details?: string;
  boqText?: string;
  turnstileToken?: string;
}

function generateRefId(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SEW-${y}${m}${d}-${rand}`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;

    if (!env.RESEND_API_KEY || !env.RFQ_TO_EMAIL || !env.RFQ_FROM_EMAIL) {
      return Response.json(
        {
          error:
            "RFQ email service is not configured yet. Set RESEND_API_KEY, RFQ_TO_EMAIL, and RFQ_FROM_EMAIL in Cloudflare Pages.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as RfqPayload;
    const source = String(body.source || "DIRECT_RFQ");
    const fullName = String(body.fullName || "").trim();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const executionScope = String(body.executionScope || "").trim();
    const requirementType = String(body.requirementType || "").trim();
    const details = String(body.details || "").trim();
    const boqText = String(body.boqText || "").trim();
    const turnstileToken = String(body.turnstileToken || "");

    if (!company || !phone) {
      return Response.json(
        { error: "Company/Site Name and Mobile number are required." },
        { status: 400 }
      );
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return Response.json(
        { error: "Please enter a valid 10-digit mobile or phone number." },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address or leave it blank." },
        { status: 400 }
      );
    }

    if (env.TURNSTILE_SECRET_KEY && turnstileToken) {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        }
      );
      const verifyData = (await verifyRes.json()) as { success?: boolean };
      if (!verifyData.success) {
        return Response.json(
          { error: "Anti-spam verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    const referenceId = generateRefId();
    const subject = `[RFQ #${referenceId}] ${company} — ${
      source === "BOQ_CART"
        ? "BOQ Cart Quote Request"
        : requirementType || "Project Enquiry"
    }`;

    const htmlBody = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0F172A;max-width:640px;">
        <div style="background:#0F172A;color:#FFFFFF;padding:16px 20px;border-radius:8px 8px 0 0;">
          <div style="font-size:12px;color:#F59E0B;font-family:monospace;">SHIVAM ELECTRICAL WORKS • NEW RFQ</div>
          <h2 style="margin:6px 0 0;font-size:20px;">Reference #${referenceId}</h2>
        </div>
        <div style="border:1px solid #E2E8F0;border-top:none;padding:20px;border-radius:0 0 8px 8px;">
          <p><strong>Source:</strong> ${escapeHtml(source)}</p>
          <p><strong>Company / Site:</strong> ${escapeHtml(company)}</p>
          <p><strong>Contact Name:</strong> ${escapeHtml(fullName || "N/A")}</p>
          <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email || "N/A")}</p>
          ${executionScope ? `<p><strong>Execution Scope:</strong> ${escapeHtml(executionScope)}</p>` : ""}
          ${requirementType ? `<p><strong>Requirement Type:</strong> ${escapeHtml(requirementType)}</p>` : ""}
          ${
            boqText
              ? `<pre style="background:#F8FAFC;border:1px solid #E2E8F0;padding:12px;border-radius:6px;white-space:pre-wrap;font-size:13px;">${escapeHtml(boqText)}</pre>`
              : ""
          }
          ${
            details
              ? `<p><strong>Project Details:</strong><br/>${escapeHtml(details).replace(/\n/g, "<br/>")}</p>`
              : ""
          }
        </div>
      </div>
    `;

    const resendPayload: Record<string, unknown> = {
      from: env.RFQ_FROM_EMAIL,
      to: [env.RFQ_TO_EMAIL],
      subject,
      html: htmlBody,
      ...(email ? { reply_to: email } : {}),
    };

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      return Response.json(
        { error: `Email delivery failed: ${errText}` },
        { status: 502 }
      );
    }

    return Response.json({ ok: true, referenceId });
  } catch (err) {
    console.error("RFQ execution error:", err);
    return Response.json(
      {
        error:
          "Internal server error while processing your request. Please contact us via phone or WhatsApp.",
      },
      { status: 500 }
    );
  }
};
