import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
export const dynamic = 'force-dynamic';
export async function GET() {
  return NextResponse.json({ ok: true, uptime: process.uptime(), db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
}
