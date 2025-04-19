'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/userSlice';

export default function UserInfo({ user }: { user: { name: string; email: string } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(user));
  }, [user, dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">User Info</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
