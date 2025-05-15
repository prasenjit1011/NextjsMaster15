import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { User as Employee } from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    const employees = await Employee.find();
    return res.status(200).json(employees);
  }

  if (req.method === 'POST') {
    const { name, email, position, department } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    try {
      const newEmployee = new Employee({ name, email, position, department });
      await newEmployee.save();
      return res.status(201).json(newEmployee);
    } catch (error: any) {
      if (error.code === 11000) { // Duplicate key
        return res.status(409).json({ message: 'Email already exists' });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
