import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { User as Employee } from '@/models/User';
import mongoose from 'mongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  console.log('API route hit, method:', req.method, 'id:', req.query.id);

  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id as string)) {
    return res.status(400).json({ message: 'Invalid employee ID' });
  }

  if (req.method === 'GET') {
    const employee = await Employee.findById(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    return res.status(200).json(employee);
  }

  if (req.method === 'PUT') {
    const { name, email, position, department } = req.body;
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { name, email, position, department },
        { new: true, runValidators: true }
      );
      if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
      return res.status(200).json(updatedEmployee);
    } catch (error: any) {
      if (error.code === 11000) {
        return res.status(409).json({ message: 'Email already exists' });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  if (req.method === 'DELETE') {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
    return res.status(200).json({ message: 'Employee deleted successfully' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
