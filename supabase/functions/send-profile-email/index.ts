// supabase/functions/send-profile-email/index.ts
// Edge Function: Sends a beautifully-formatted profile email via Resend
// when a user submits their email through the PDF gate.

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = "abby <abby@domesticarchetypes.com>";
const REPLY_TO_EMAIL = "draperone@lovehealth.live";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ProfilePayload {
  email: string;
  name: string;
  primaryName: string;
  primaryVibe: string;
  primaryOpening: string;
  modifierName: string;
  secondaryName: string;
  secondaryShort: string;
  sections: { label: string; content: string | string[] }[];
  modifierDescription: string;
  resultUrl: string;
}

function buildEmailHTML(payload: ProfilePayload): string {
  const {
    name,
    primaryName,
    primaryVibe,
    primaryOpening,
    modifierName,
    secondaryName,
    secondaryShort,
    sections,
    modifierDescription,
    resultUrl,
  } = payload;

  const firstName = name ? name.toLowerCase() : "";

  const sectionHTML = sections
    .map((section) => {
      const contentHTML = Array.isArray(section.content)
        ? section.content
            .map(
              (item) =>
                `<p style="margin: 0 0 10px 0; font-style: italic; color: #e1ded5;">— ${item}</p>`
            )
            .join("")
        : `<p style="margin: 0; font-style: italic; color: #e1ded5; line-height: 1.7;">${section.content}</p>`;

      return `
        <div style="margin-bottom: 32px;">
          <p style="margin: 0 0 12px 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #a5a29a;">${section.label}</p>
          ${contentHTML}
        </div>
      `;
    })
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Archetype Profile</title>
</head>
<body style="margin: 0; padding: 0; background-color: #2c2a23; font-family: Georgia, 'Times New Roman', serif; color: #f5f4ed;">

  <!-- Wrapper -->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #2c2a23;">
    <tr>
      <td align="center">

        <!-- Container -->
        <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%;">

          <!-- Top label -->
          <tr>
            <td style="padding: 50px 40px 0 40px; text-align: center;">
              <p style="margin: 0; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #a5a29a;">a domestic archetype profile</p>
            </td>
          </tr>

          ${
            firstName
              ? `
          <!-- Profile for -->
          <tr>
            <td style="padding: 24px 40px 0 40px; text-align: center;">
              <p style="margin: 0; font-style: italic; color: #a5a29a; font-size: 14px;">profile for: ${firstName}</p>
            </td>
          </tr>
          `
              : ""
          }

          <!-- Primary archetype name -->
          <tr>
            <td style="padding: 20px 40px 0 40px; text-align: center;">
              <h1 style="margin: 0; font-style: italic; font-size: 42px; line-height: 1.2; color: #f5f4ed; font-weight: normal;">${primaryName}</h1>
            </td>
          </tr>

          <!-- Modifier & Secondary -->
          <tr>
            <td style="padding: 16px 40px 0 40px; text-align: center;">
              <p style="margin: 0 0 4px 0; font-style: italic; color: #d1cfc6; font-size: 16px;">with ${modifierName.replace("The ", "")} energy</p>
              <p style="margin: 0; font-style: italic; color: #d1cfc6; font-size: 16px;">&amp; ${secondaryName.replace("The ", "")} underneath</p>
            </td>
          </tr>

          <!-- Opening line -->
          <tr>
            <td style="padding: 32px 40px 0 40px; text-align: center;">
              <p style="margin: 0; font-style: italic; font-size: 17px; color: #f5f4ed; line-height: 1.6;">"${primaryOpening}"</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 36px 40px 0 40px;" align="center">
              <div style="width: 60px; height: 1px; background-color: #737065; margin: 0 auto;"></div>
            </td>
          </tr>

          <!-- Sections -->
          <tr>
            <td style="padding: 40px 40px 0 40px;">
              ${sectionHTML}
            </td>
          </tr>

          <!-- Modifier section -->
          <tr>
            <td style="padding: 16px 40px 0 40px;" align="center">
              <div style="width: 60px; height: 1px; background-color: #737065; margin: 0 auto 28px auto;"></div>
              <p style="margin: 0 0 16px 0; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #a5a29a;">your modifier</p>
              <h2 style="margin: 0 0 16px 0; font-style: italic; font-size: 22px; color: #f5f4ed; font-weight: normal;">${modifierName}</h2>
              <p style="margin: 0; font-style: italic; color: #e1ded5; line-height: 1.7; text-align: left;">${modifierDescription}</p>
            </td>
          </tr>

          <!-- Secondary section -->
          <tr>
            <td style="padding: 40px 40px 0 40px;" align="center">
              <div style="width: 60px; height: 1px; background-color: #737065; margin: 0 auto 28px auto;"></div>
              <p style="margin: 0 0 16px 0; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #a5a29a;">running underneath</p>
              <h2 style="margin: 0 0 16px 0; font-style: italic; font-size: 22px; color: #f5f4ed; font-weight: normal;">${secondaryName}</h2>
              <p style="margin: 0; font-style: italic; color: #e1ded5; line-height: 1.7; text-align: left;">${secondaryShort}</p>
            </td>
          </tr>

          <!-- Vibe (closer) -->
          <tr>
            <td style="padding: 48px 40px 0 40px;" align="center">
              <div style="width: 60px; height: 1px; background-color: #737065; margin: 0 auto 28px auto;"></div>
              <p style="margin: 0; font-style: italic; font-size: 22px; color: #f5f4ed; line-height: 1.4;">${primaryVibe}</p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 48px 40px 0 40px;" align="center">
              <p style="margin: 0 0 8px 0; font-style: italic; color: #d1cfc6; font-size: 15px; line-height: 1.6;">your profile lives here. revisit anytime.</p>
              <p style="margin: 16px 0 0 0;">
                <a href="${resultUrl}" style="display: inline-block; padding: 14px 28px; background-color: #f5f4ed; color: #2c2a23; text-decoration: none; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">view your profile</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 60px 40px 50px 40px; text-align: center;">
              <p style="margin: 0 0 6px 0; font-style: italic; color: #8c8980; font-size: 12px;">nine women, one house</p>
              <p style="margin: 0 0 6px 0; font-style: italic; color: #8c8980; font-size: 12px;">by <a href="https://instagram.com/mrslovehealthdoc" style="color: #8c8980; text-decoration: underline;">@mrslovehealthdoc</a></p>
              <p style="margin: 16px 0 0 0; font-style: italic; color: #8c8980; font-size: 12px;">
                <a href="https://domesticarchetypes.com" style="color: #8c8980; text-decoration: underline;">domesticarchetypes.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload: ProfilePayload = await req.json();

    if (!payload.email || !payload.email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(
        JSON.stringify({ error: "email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlBody = buildEmailHTML(payload);
    const firstName = payload.name ? payload.name.toLowerCase() : "";
    const subject = firstName
      ? `${firstName} — your archetype profile is here`
      : `your archetype profile is here`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [payload.email],
        reply_to: REPLY_TO_EMAIL,
        subject: subject,
        html: htmlBody,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend error:", resendData);
      return new Response(
        JSON.stringify({ error: "email send failed", details: resendData }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Function error:", err);
    return new Response(
      JSON.stringify({ error: "unexpected error", message: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
