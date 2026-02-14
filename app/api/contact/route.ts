import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_RECIPIENTS = ['fe.asuquo@yahoo.com', 'chodasolid@gmail.com'];

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const interest = String(form.get('interest') || '').trim();
    const message = String(form.get('message') || '').trim();

    if (!email) {
      return NextResponse.json({ ok: false, error: 'Missing email' }, { status: 400 });
    }

    const subject = `New message from NOCIH website${interest ? ` — ${interest}` : ''}`;

    // 1) Admin email (what you already have)
    const adminSend = await resend.emails.send({
      from: 'NOCIH <info@nocih.org>',
      to: ADMIN_RECIPIENTS,
      replyTo: email,
      subject,
      text: `New Contact Message — NOCIH

Name: ${name}
Email: ${email}
Interest: ${interest || '—'}

Message:
${message}
`,
    });

    if ((adminSend as any)?.error) {
      console.error('Admin email error:', (adminSend as any).error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    // 2) Auto-reply to visitor
    const autoReply = await resend.emails.send({
      from: 'NOCIH <info@nocih.org>',
      to: [email],
      subject: 'We received your message — NOCIH',
      text: `Hi ${name || 'there'},

Thank you for contacting the Nigeria Ocean-Climate Innovation Hub (NOCIH).
We have received your message and a member of our team will respond within 2–3 working days.

Summary of what you sent:
Interest: ${interest || '—'}

Message:
${message}

Warm regards,
NOCIH Team
https://nocih.org
`,
    });

    if ((autoReply as any)?.error) {
      console.error('Auto-reply error:', (autoReply as any).error);
      // We don't fail the whole request if auto-reply fails, but we log it.
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
