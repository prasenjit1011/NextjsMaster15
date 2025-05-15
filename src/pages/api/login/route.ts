// app/api/login/route.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Dummy credentials for demo
  if (email === 'admin@example.com' && password === 'admin') {
    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    const res = NextResponse.json({ message: 'Login successful' });
    res.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    return res;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
