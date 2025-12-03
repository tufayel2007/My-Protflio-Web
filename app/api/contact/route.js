import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // 1) Nodemailer Transporter (Gmail + App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 2) Email to YOU (Portfolio Owner)
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Message from ${name}`,
      text: message,
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
      <div style="font-size:20px; font-weight:600; color:#fff;">Tufayle Ahmed</div>
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
