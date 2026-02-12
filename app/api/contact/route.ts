import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      interest: String(form.get('interest') || ''),
      message: String(form.get('message') || ''),
      createdAt: new Date().toISOString(),
    };

    // For now we just log it (Netlify will show this in Function logs).
    // Later we can send email via Resend/SendGrid.
    console.log('NOCIH contact submission:', payload);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
