"use client";
import { ReactNode } from "react";
import { UserProvider } from "@/context/ServerContext";
import Home from "./Home"; // actual UI

export default function ClientWrapper({ initialUser }: { initialUser: any }) {
  return (
    <UserProvider initialUser={initialUser}>
      <Home />
    </UserProvider>
  );
}
