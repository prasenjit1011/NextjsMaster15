'use server';

import { connectDB } from '@/lib/db';
import { User } from '@/models/User';


export async function saveName(formData: FormData) {
  const name  = formData.get('name') as string;
  const email = formData.get('name') as string;
  console.log("Saving name to DB:", name);

  if (!name || !email) return;

  await connectDB();
  await User.create({ name, email });

  return { success: true };
}
