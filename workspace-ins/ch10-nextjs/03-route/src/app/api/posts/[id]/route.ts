import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Client-Id': 'openmarket',
    },
  });
  const data = await res.json();
  console.log('route handler GET', id);
  return NextResponse.json(data);
}