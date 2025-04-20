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
      <div style={{backgroundColor:'#FFF', color:'#000', padding:'20px'}}>
        <div>
            <span>Client Loyout : </span>
            <Link href="/client/login"><u>Client Login Page</u></Link> &nbsp; 
            <Link href="/client/dashboard"><u>Client Dashboard Page</u></Link>
        </div>
        {children}
      </div>
    </UserProvider>
  );
}
