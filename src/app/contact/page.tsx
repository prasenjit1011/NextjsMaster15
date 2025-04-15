'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: 'Test', email: 'test@admin.com', message: 'Dummy Txt dummy txt' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = 'http://localhost:3000/items';
      //const apiUrl = 'https://dummyjson.com/posts/add';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('Submitted:', data);
      setSubmitted(true);
      //setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setLoading(false);
  };

  return (
    <div className="content">
      <div className="max-w-xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Contact us page in app folder </h1>


        {submitted && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 rounded" data-cy="success-message">
            ✅ Your message has been sent!
          </div>
        )}
        <img src="https://dummyimage.com/600x50/000/f00" alt="Dummy Image" />

<form
  onSubmit={handleSubmit}
  className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto"
>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
      Name
    </label>
    <input
      type="text"
      name="name"
      data-cy="input-name"
      id="name"
      placeholder="John Doe"
      className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      value={form.name}
      onChange={handleChange}
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
      Email
    </label>
    <input
      type="email"
      name="email"
      data-cy="input-email"
      id="email"
      placeholder="john@example.com"
      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      value={form.email}
      onChange={handleChange}
      required
    />

  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
      Message
    </label>
    <textarea
  name="message"
  id="message"
  data-cy="input-message"
  placeholder="Write your message here..."
  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  value={form.message}
  onChange={handleChange}
  required
></textarea>

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
