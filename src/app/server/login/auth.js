// pages/api/auth.js (or .ts)
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Login: Set the token cookie
    res.setHeader('Set-Cookie', 'token=dark; Path=/; Max-Age=604800'); // 7 days
    return res.status(200).json({ message: 'Logged in' });
  }

  if (req.method === 'DELETE') {
    // Logout: Remove the token cookie
    res.setHeader('Set-Cookie', 'token=; Path=/; Max-Age=0'); // Remove cookie
    return res.status(200).json({ message: 'Logged out' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
