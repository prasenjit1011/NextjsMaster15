"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserFromToken } from "@/lib/auth";

import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";


export default function Header({user}) {
  
  

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md dark:bg-gray-900">
  {/* Logo */}
  <div className="flex items-center">
    <Image 
      className="dark:invert"
      src="/next.svg"
      alt="Next.js logo"
      width={120}
      height={32}
      priority
    />
  </div>

  {/* Navigation Menu */}
  <nav>
    <ul className="flex space-x-6 text-sm font-mono">
      <li>
        <Link href="/" className="hover:text-blue-500 transition">Home</Link>
      </li>
      
      <li>
        <Link href="/dashboard" className="hover:text-blue-500 transition">Dashboard</Link>
      </li>
      <li>
        <Link href="/users" className="hover:text-blue-500 transition">Users</Link>
      </li>
      <li>
        <Link href="/users/add" className="hover:text-blue-500 transition">Add User</Link>
      </li>
      <li>
        <Link href="/blog" className="hover:text-blue-500 transition">Blog</Link>
      </li>
      {!user ? (
        <li>
          <Link href="/login" className="hover:text-blue-500 transition">Login</Link>
        </li>
      ) : (
        <li>
          <Link href="/login" className="hover:text-blue-500 transition">Logout</Link>
        </li>
      )}
    </ul>
  </nav>
</header>
  );
}
