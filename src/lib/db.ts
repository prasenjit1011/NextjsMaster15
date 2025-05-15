// lib/db.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

// Global is used here to cache the connection across hot reloads in dev
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    // ✅ Already connected
    return cached.conn;
  }

  if (!cached.promise) {
    // ❌ Not connected yet – create connection promise
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        //dbName: 'testdb', // Optional: your DB name
        bufferCommands: false,
      })
      .then((mongoose) => {
        console.log('[MongoDB] Connected');
        return mongoose;
      })
      .catch((err) => {
        console.error('[MongoDB] Connection error:', err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
