'use client'; // Only if using app/ directory

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // or 'next/router' for pages/

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  


  return (
    <div className="content">
      <div className="max-w-xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Contact us page in app folder </h1>


        {error && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 rounded" data-cy="success-message">
            ✅ {error}
          </div>
        )}
        <img src="https://dummyimage.com/600x50/000/f00" alt="Dummy Image" />

<form
  onSubmit={handleLogin}
  className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto"
>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
      Name
    </label>
    

    <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
    />
    
    



  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
      Email
    </label>
    <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
    />

  </div>

  <button
    type="submit"
    data-cy="submit-button"
    disabled={loading}
    className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
  >
    {loading ? 'Sending...' : 'Send Message'}
  </button>
</form>



      </div>
    </div>
  );


}
