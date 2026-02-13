import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: false, error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const form = await req.formData();
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const interest = String(form.get('interest') || '').trim();
    const message = String(form.get('message') || '').trim();

    const subject = `New message from noich.org${interest ? ` — ${interest}` : ''}`;

    const sendResult = await resend.emails.send({
      // This sender is allowed on Resend for testing.
      from: 'NOCIH Website <onboarding@resend.dev>',
      to: ['chodasolid@gmail.com'],
      replyTo: email || undefined,
      subject,
      text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`,
    });

    // If Resend returns an error, surface it
    if ((sendResult as any)?.error) {
      console.error('Resend error:', (sendResult as any).error);
      return NextResponse.json({ ok: false, error: (sendResult as any).error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
