// components/Layout.js
import React from 'react'
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">  
    <ul className="w-full flex bg-gray-100 text-black px-4 py-2 rounded shadow-md">
      <li className="w-32 text-center hover:text-blue-600 cursor-pointer">
        <Link href="/">My Site Logo</Link>
      </li>
      <li className="w-32 text-center hover:text-blue-600 cursor-pointer">
        <Link href="/">Home</Link>
      </li>
      <li className="w-32 text-center hover:text-blue-600 cursor-pointer">
        <Link href="/about">About Myself</Link>
      </li>
      <li className="w-48 text-center hover:text-blue-600 cursor-pointer">
        <Link href="/client">Client Side Render</Link>
      </li>
      <li className="w-48 text-center hover:text-blue-600 cursor-pointer">
        <Link href="/server">Server Side Render</Link>
      </li>
      <li className="w-48 text-center hover:text-blue-600 cursor-pointer">
        <Link href="/static">Static Site Render</Link>
      </li>
      <li className="w-48 text-center hover:text-blue-600 cursor-pointer">
        <Link href="/contact">Contact</Link>
      </li>
      
    </ul>
    </header>

      <main style={{ padding: '0rem' }}>{children}</main>
      <footer style={{ background: '#eee', padding: '1rem', marginTop: '2rem' }}>
        © 2025 Prasenjit’s Site
      </footer>
    </div>
  )
}
