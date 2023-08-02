import { NextResponse } from 'next/server';

export async function GET(req) {
  console.log('api/hello GET');
  return NextResponse.json({ id: 1 });
}
