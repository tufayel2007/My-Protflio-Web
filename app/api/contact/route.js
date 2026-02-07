import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // 1) Nodemailer Transporter (Gmail + App Password)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 2) Email to YOU (Portfolio Owner)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`, // আরও প্রফেশনাল লুক
      to: process.env.GMAIL_USER,
      subject: `New Message from ${name} | Portfolio`,
      html: `
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .outer { background: #0b0f14 !important; }
      .card { background: linear-gradient(135deg,#0f1720,#07121a) !important; box-shadow: 8px 8px 24px rgba(0,0,0,0.6) !important; color: #dfeeff !important; }
      .muted { color: #9fb7d9 !important; }
      .cta { color: #001018 !important; }
      a.cta-link { color: #ffffff !important; }
    }

    a.cta-link:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.35) !important;
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f0f3f6;font-family:Arial,Helvetica,sans-serif;">
  <div class="outer" style="padding:30px 16px;background:#f0f3f6;">
    <table role="presentation" style="width:100%;max-width:720px;margin:0 auto;">
      <tr>
        <td style="padding:8px;">
          <!-- Main Card -->
          <table role="presentation" class="card" style="width:100%;border-radius:18px;background:linear-gradient(135deg,#eef3f8,#e6eef7);padding:28px;box-shadow:12px 12px 28px #cfcfcf,-12px -12px 28px #ffffff;border:1px solid rgba(0,0,0,0.03);">
            
            <!-- Logo -->
            <tr>
              <td style="text-align:center;padding-bottom:20px;">
                <img src="https://i.ibb.co.com/FqNWnYJv/banear.jpg" alt="Tufayle Ahmed Logo" width="86" style="border-radius:50%;border:3px solid #2aa1ff;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="text-align:center;padding-bottom:20px;">
                <h2 style="margin:0;font-size:24px;color:#1353d6;">New Message Received</h2>
                <p class="muted" style="margin:8px 0 0;color:#6b7a90;font-size:14px;">Someone just filled your portfolio contact form</p>
              </td>
            </tr>

            <!-- Sender Info -->
            <tr>
              <td style="padding:20px 0;">
                <div style="background:linear-gradient(180deg,#f6f9fc,#eef5fb);border-radius:14px;padding:18px;box-shadow:inset 8px 8px 18px #d6dfe8,inset -8px -8px 18px #ffffff;border:1px solid rgba(0,0,0,0.03);">
                  <p style="margin:0 0 8px;font-size:15px;color:#324356;"><strong>Name:</strong> ${name}</p>
                  <p style="margin:0 0 8px;font-size:15px;color:#324356;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#2aa1ff;text-decoration:none;">${email}</a></p>
                  <p style="margin:8px 0 0;font-size:13px;color:#5a6b80;">Received: ${new Date().toLocaleString(
                    "en-GB",
                    { timeZone: "Asia/Dhaka" },
                  )}</p>
                </div>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:10px 0 20px;">
                <div style="background:linear-gradient(180deg,#ffffff,#f8fbff);border-radius:14px;padding:18px;border:1px solid rgba(0,0,0,0.05);box-shadow:inset 6px 6px 12px rgba(0,0,0,0.03);">
                  <strong style="display:block;margin-bottom:12px;color:#0b2f66;font-size:15px;">Message</strong>
                  <div style="white-space:pre-wrap;line-height:1.65;font-size:15px;color:#2b3b4b;">${message.replace(
                    /\n/g,
                    "<br>",
                  )}</div>
                </div>
              </td>
            </tr>

            <!-- CTA Button -->
            <tr>
              <td style="text-align:center;padding:20px 0;">
                <a href="https://tufayleahmed.me" target="_blank" class="cta-link" style="display:inline-block;background:linear-gradient(90deg,#2aa1ff,#7b59ff);color:#ffffff;padding:14px 32px;border-radius:999px;font-weight:700;text-decoration:none;box-shadow:0 10px 30px rgba(122,100,255,0.3);transition:all 200ms ease;">
                  View My Portfolio →
                </a>
              </td>
            </tr>

            <!-- Social Links & Signature -->
            <tr>
              <td style="text-align:center;padding-top:20px;border-top:1px solid rgba(0,0,0,0.08);margin-top:20px;">
                <p style="margin:20px 0 12px;">
                  <a href="https://facebook.com/ta0709200" style="margin:0 8px;"><img src="https://cdn-icons-png.flaticon.com/32/733/733547.png" width="28" alt="Facebook"></a>
                  <a href="https://instagram.com/ta653181" style="margin:0 8px;"><img src="https://cdn-icons-png.flaticon.com/32/2111/2111463.png" width="28" alt="Instagram"></a>
                  <a href="https://github.com/tufayel2007" style="margin:0 8px;"><img src="https://cdn-icons-png.flaticon.com/32/733/733553.png" width="28" alt="GitHub"></a>
                </p>
                <p style="margin:10px 0 0;color:#6b7a90;font-size:13px;">
                  Sent to <strong>${
                    process.env.GMAIL_USER
                  }</strong> • Automated notification
                </p>
                <p style="margin:15px 0 0;color:#223244;font-size:15px;">
                  <strong>Tufayle Ahmed</strong><br>
                  <span style="font-size:13px;color:#6b7a90;">Full-Stack Web Developer • UI/UX Designer</span>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `,
    });

    // 3) Auto Reply Email (FULL FIXED VERSION)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thanks for contacting me!",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thanks for your message!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body style="margin:0; padding:0; background:radial-gradient(circle at 50% 50%, #162033 0%, #0c0e1a 100%); min-height:100vh; display:flex; align-items:center; justify-content:center; font-family:Arial, Helvetica, sans-serif;">
  
  <div style="max-width:620px; width:95%; margin:20px auto; background:rgba(20, 25, 45, 0.65); backdrop-filter:blur(16px); border-radius:24px; padding:44px; border:1px solid rgba(0, 255, 255, 0.2); box-shadow:0 8px 32px rgba(0,0,0,0.6);">

    <div style="text-align:center; margin-bottom:32px;">
      <img src="https://i.ibb.co.com/FqNWnYJv/banear.jpg" width="120"
        style="border-radius:50%; border:4px solid #0ff; box-shadow:0 0 25px #0ff;" />
    </div>

    <h2 style="font-size:30px; text-align:center; margin:0 0 24px;
               color:#0ff; text-shadow:0 0 12px #0ff;">
      Thank You for Reaching Out!
    </h2>

    <p style="font-size:17px; color:#e0e0ff; line-height:1.8; text-align:center;">
      Hey <strong style="color:#0ff;">${name}</strong>,<br><br>
      Your message just landed in my inbox. I’ll reply soon!
    </p>

    <div style="background:rgba(0,255,255,0.08); border:1px solid rgba(0,255,255,0.3); padding:18px; border-radius:16px; color:#0ff; text-align:center; margin:30px 0;">
      <b>Reply Time:</b> within 24 hours ⭐
    </div>

    <div style="background:rgba(15, 20, 40, 0.6); padding:20px; border-radius:16px; border:1px solid rgba(0,255,255,0.25); color:#ccc;">
      <strong style="color:#0ff;">Your Message:</strong><br><br>
      <div>${message}</div>
    </div>

    <div style="text-align:center; margin:40px 0;">
      <a href="https://my-protflio-web.vercel.app/"
        style="background:linear-gradient(45deg, #0ff, #ff00ff);
               color:#000; padding:14px 32px; border-radius:50px;
               text-decoration:none; font-weight:700; font-size:17px;">
        Visit My Portfolio
      </a>
    </div>

    <div style="text-align:center; color:#aaa; margin-top:40px;">
      <div style="font-size:20px; font-weight:600; color:#fff;">Tufayel Ahmed</div>
      <div style="color:#0ff; font-size:15px;">Web Developer • UI/UX Designer</div>
    </div>

    <div style="text-align:center; margin:30px 0;">
      <a href="https://www.facebook.com/ta0709200" style="margin:0 12px;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="34" />
      </a>
      <a href="https://www.instagram.com/ta653181/" style="margin:0 12px;">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="34" />
      </a>
      <a href="https://github.com/tufayel2007" style="margin:0 12px;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width="34" />
      </a>
    </div>

    <p style="text-align:center; color:#555; font-size:12px;">
      This is an automated reply — no need to respond.
    </p>

  </div>
</body>
</html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ success: false });
  }
}
