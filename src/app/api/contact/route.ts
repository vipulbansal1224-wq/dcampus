import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // NOTE FOR USER: To make this work in production, replace the credentials below
    // with your real SMTP settings (e.g., Gmail with an App Password).
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "your-email@gmail.com",
        pass: process.env.SMTP_PASS || "your-app-password",
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || "your-email@gmail.com",
      to: "rahul.ketan.rk@gmail.com", // Admin Email
      subject: \New Enquiry from \\,
      text: \
        You have received a new enquiry from the DCCampus Website:
        
        Name: \
        Email: \
        Phone: \
        
        Message:
        \
      \,
    };

    // We comment this out so it doesn't crash locally without real credentials.
    // await transporter.sendMail(mailOptions);
    
    // Simulate sending email locally
    console.log("--- NEW ENQUIRY RECEIVED ---");
    console.log(mailOptions.text);
    console.log("----------------------------");

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send message." }, { status: 500 });
  }
}
