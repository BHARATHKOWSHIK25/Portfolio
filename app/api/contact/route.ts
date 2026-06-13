import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Resend API integration
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // If no API key, just log and return success (for development)
      console.log('Contact form submission:', { name, email, subject, message });
      return NextResponse.json({ success: true, message: 'Message received (dev mode).' });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // NOTE: Using onboarding@resend.dev (Resend test sender).
        // This can ONLY deliver to your verified Resend account email.
        // To receive from anyone, add & verify a custom domain at resend.com/domains
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['bharathkowshik25@gmail.com'], // must match your Resend account email
        reply_to: email,
        subject: `[Portfolio] ${subject} — from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #111; color: #F5F5F5; border-radius: 12px;">
            <h2 style="color: #00E5FF; margin-bottom: 1.5rem;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 0.5rem 0; color: #888; width: 100px;">Name</td>
                <td style="padding: 0.5rem 0; color: #F5F5F5; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 0.5rem 0; color: #888;">Email</td>
                <td style="padding: 0.5rem 0; color: #00E5FF;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 0.5rem 0; color: #888;">Subject</td>
                <td style="padding: 0.5rem 0; color: #F5F5F5;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 1.5rem; padding: 1rem; background: #161616; border-radius: 8px; border-left: 3px solid #00E5FF;">
              <p style="color: #888; margin-bottom: 0.5rem; font-size: 0.85rem;">Message</p>
              <p style="color: #F5F5F5; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('Resend error:', err);
      return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
