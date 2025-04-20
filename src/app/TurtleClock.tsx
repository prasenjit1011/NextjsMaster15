"use client";
import { useEffect, useState } from "react";

const formatTime = (date: Date) => {
  const y = String(date.getFullYear()).padStart(2, "0");
  const n = date.toLocaleString("default", { month: "long" });
  const d = String(date.getDate()).padStart(2, "0");
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  const l = String(date.getMilliseconds()).padStart(3, "0");
  return `${y}:${n}:${d}:${h}:${m}:${s}:${l}`;
};

export default function TurtleClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatTime(new Date()));
    update(); // set immediately on mount

    const timer = setInterval(update, 1);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null; // SSR-safe: don’t render mismatched content

  return (
    <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
      🐢 Time Now: {time}
    </div>
  );
}
