// lib/userService.ts
import { connectDB } from './db';
import { User } from '@/models/User';

export async function getData() {
  await connectDB();
  
  return await User.find({});
}
