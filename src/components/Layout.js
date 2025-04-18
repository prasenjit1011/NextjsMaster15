// components/Layout.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <ul className="flex bg-gray-100 text-black px-4 py-2 rounded shadow-md gap-4">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/">My Site Logo</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/about">About Myself</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/client">Client Side Render</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/server">Server Side Render</Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer hover:text-blue-600 block">Static Site Render</span>
            {/* Submenu */}
            <ul className="absolute left-0 mt-1 bg-white text-black rounded shadow-md w-40 z-50 hidden group-hover:flex flex-col">
              <li className="hover:bg-gray-200 p-2 rounded">
                <Link href="/team">Team333</Link>
              </li>
              <li className="hover:bg-gray-200 p-2 rounded">
                <Link href="/history">History</Link>
              </li>

              <li className="hover:bg-gray-200 p-2 rounded">
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="hover:bg-gray-200 p-2 rounded">
                  <Link href="/settings">Settings</Link>
                </li>
                <li className="hover:bg-gray-200 p-2 rounded">
                  <Link href="/history">History</Link>
                </li>
              </ul>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/login">Login/Signup</Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer hover:text-blue-600 block">Api Data</span>
            <ul className="absolute left-0 mt-1 bg-white text-black rounded shadow-md w-40 z-50 hidden group-hover:flex flex-col">
              <li className="hover:bg-gray-200 p-2 rounded">
                <Link href="/dummyjson/products">Api Data</Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      <main className="p-4">{children}</main>

      <footer className="bg-gray-200 text-center py-3 mt-6">
        © 2025 Prasenjit’s Site
      </footer>
    </div>
  );
}
