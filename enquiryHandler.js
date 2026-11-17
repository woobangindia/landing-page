import { NextResponse } from 'next/server';
import { connectDB } from './db';
import { notify } from './mailer';
import { rateLimit } from './rateLimit';

const json = (body, status) => NextResponse.json(body, { status });

export function enquiryHandler(schema, build, label) {
  return async function POST(req) {
    try {
      const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
      if (!rateLimit(ip)) return json({ ok: false, message: 'Too many submissions. Please try again in a few minutes.' }, 429);
      if (+req.headers.get('content-length') > 20000) return json({ ok: false, message: 'Request too large.' }, 413);
      const body = await req.json().catch(() => null);
      if (!body || typeof body !== 'object') return json({ ok: false, message: 'Invalid request.' }, 400);
      if (body.company_url) return json({ ok: true }, 201); // honeypot: pretend success

      const parsed = schema.safeParse(body);
      if (!parsed.success) {
        const errors = {};
        parsed.error.issues.forEach((i) => { errors[i.path[0]] ||= i.message; });
        return json({ ok: false, message: 'Please check the highlighted fields.', errors }, 422);
      }
      const d = parsed.data;
      if (typeof d.startedAt === 'number' && Date.now() - d.startedAt < 3000) return json({ ok: true }, 201); // time-trap

      await connectDB();
      const doc = await build(d, { ip, userAgent: (req.headers.get('user-agent') || '').slice(0, 250) });
      await notify(`New ${label} enquiry: ${d.fullName}`, doc.toObject()).catch((e) => console.error('Mail failed:', e.message));
      return json({ ok: true }, 201);
    } catch (e) {
      console.error(e);
      return json({ ok: false, message: 'Something went wrong. Please try again later.' }, 500);
    }
  };
}
