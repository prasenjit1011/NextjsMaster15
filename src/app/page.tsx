'use client';
import Image from "next/image";
import { useState } from "react";
import TurtleClock from "./TurtleClock";

export default function Home() {
  const [cnt, setCount] = useState(5);

  return (
    <div>
      Home &nbsp; 
      <button>{cnt}</button>  
      <TurtleClock />
    </div>
  );
}
