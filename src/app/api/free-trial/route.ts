import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend || !resendApiKey) {
      console.error("Resend API key is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, device, country, found_us_via } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Format device name for better readability
    const deviceNames: Record<string, string> = {
      firestick: "Amazon Firestick",
      "android-tv": "Android TV",
      "smart-tv": "Smart TV",
      mobile: "Mobile / Tablet",
    };

    const deviceName = deviceNames[device] || device;

    // Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeDeviceName = escapeHtml(deviceName);
    const safeCountry = escapeHtml(country || "Not specified");
    const safeSource = escapeHtml(found_us_via || "Not specified");

    // Send email using Resend with verified domain
    // Domain coffeedonuttv.com is verified in Resend
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Coffee & Donut TV <noreply@coffeedonuttv.com>";
    
    console.log("=== EMAIL SEND ATTEMPT ===");
    console.log("From:", fromEmail);
    console.log("To: coffeedonuttv@gmail.com");
    console.log("Reply-To:", email);
    console.log("Subject: New Free Trial Request - Coffee & Donut TV");
    
    const result = await resend.emails.send({
      from: fromEmail,
      to: ["coffeedonuttv@gmail.com"],
      replyTo: email,
      subject: "New Free Trial Request - Coffee & Donut TV",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #E2955A 0%, #B8753D 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #ddd;
                border-top: none;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 5px;
                border-left: 4px solid #E2955A;
              }
              .label {
                font-weight: bold;
                color: #E2955A;
                display: block;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
              }
              .value {
                color: #333;
                font-size: 16px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>☕ New Free Trial Request</h1>
              <p>Coffee & Donut TV</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${safeName}</div>
              </div>
              
              <div class="field">
                <span class="label">Email</span>
                <div class="value">${safeEmail}</div>
              </div>
              
              <div class="field">
                <span class="label">Device</span>
                <div class="value">${safeDeviceName}</div>
              </div>
              
              <div class="field">
                <span class="label">Country</span>
                <div class="value">${safeCountry}</div>
              </div>
              
              <div class="field">
                <span class="label">Found Us Via</span>
                <div class="value">${safeSource}</div>
              </div>
              
              <div class="footer">
                <p>This request was submitted from the Coffee & Donut TV website.</p>
                <p>Please respond to this email to send credentials to the user.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Free Trial Request - Coffee & Donut TV

Name: ${name}
Email: ${email}
Device: ${deviceName}
Country: ${country || "Not specified"}
Found Us Via: ${found_us_via || "Not specified"}

This request was submitted from the Coffee & Donut TV website.
Please respond to this email to send credentials to the user.
      `,
    });

    console.log("=== RESEND RESPONSE ===");
    console.log("Full response:", JSON.stringify(result, null, 2));

    // Check for errors in the response
    if (result.error) {
      console.error("Resend error:", JSON.stringify(result.error, null, 2));
      return NextResponse.json(
        { 
          error: "Failed to send email",
          details: process.env.NODE_ENV === "development" ? result.error : undefined
        },
        { status: 500 }
      );
    }

    // Verify that data exists (email was actually sent)
    if (!result.data || !result.data.id) {
      console.error("Resend returned success but no email ID:", result);
      return NextResponse.json(
        { 
          error: "Email service returned unexpected response",
          details: process.env.NODE_ENV === "development" ? result : undefined
        },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully! Email ID:", result.data.id);

    return NextResponse.json(
      { success: true, message: "Email sent successfully", emailId: result.data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
