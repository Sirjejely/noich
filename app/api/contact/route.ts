import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const interest = String(form.get('interest') || '').trim();
    const message = String(form.get('message') || '').trim();

    const subject = `New message from NOCIH website${interest ? ` — ${interest}` : ''}`;

    const { error } = await resend.emails.send({
      from: 'NOCIH <info@nocih.org>',
      to: ['fe.asuquo@yahoo.com', 'chodasolid@gmail.com'],
      replyTo: email || undefined,
      subject,
      text: `
New Contact Message — NOCIH

Name: ${name}
Email: ${email}
Interest: ${interest || '—'}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
