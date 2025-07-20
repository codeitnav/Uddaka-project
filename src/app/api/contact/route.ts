import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for you (business owner)
    const businessEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f97316;">New Contact Form Submission</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        </div>
        <div style="background: #fff; padding: 20px; border-left: 4px solid #f97316; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          This email was sent from your Uddaka contact form.
        </p>
      </div>
    `;

    // Email content for customer (confirmation)
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f97316, #ec4899); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">Thank You for Contacting Uddaka!</h1>
        </div>
        <div style="background: #fff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to us! We've received your message and will get back to you within 24 hours.
          </p>
          
          <div style="background: #fef2f2; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>

          <div style="background: linear-gradient(135deg, #f97316, #ec4899); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: white; margin-top: 0;">Why Choose Uddaka?</h3>
            <ul style="color: white; line-height: 1.8;">
              <li>⭐ 99.5% On-time delivery rate</li>
              <li>🛡️ Fully insured packages</li>
              <li>🕒 24/7 customer support</li>
              <li>🌍 500+ cities coverage</li>
            </ul>
          </div>

          <p style="font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our services or contact us directly at:
          </p>
          <p style="font-size: 16px;">
            📧 <a href="mailto:hello@uddaka.com" style="color: #f97316;">hello@uddaka.com</a><br>
            📞 +91 88888 99999
          </p>
        </div>
        <div style="text-align: center; padding: 20px; color: #666; font-size: 14px;">
          <p>This is an automated message from Uddaka Delivery Services</p>
        </div>
      </div>
    `;

    // Send email to business
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: businessEmailContent,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting Uddaka - We\'ll be in touch soon!',
      html: customerEmailContent,
    });

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}