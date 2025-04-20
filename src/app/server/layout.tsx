'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { createContext, useState } from "react";

import { UserProvider } from "@/context/ClientContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <UserProvider>
      <div style={{backgroundColor:'#FFF', color:'#000', padding:'20px 20px 0'}}>
          <span>Server Loyout : </span>
          <Link href="/server/login"><u>Server Login Page</u></Link> &nbsp; 
          <Link href="/server/dashboard"><u>Server Dashboard Page</u></Link>
      </div>
      {children}
    </UserProvider>
  );
}
