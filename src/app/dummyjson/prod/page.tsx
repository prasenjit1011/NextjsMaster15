'use client';

import { useMemo, useState } from "react";
import "../../../styles/globals.css"



function ChildA({ count, setCount }) {
    return <button onClick={() => setCount(count + 1)} className="btnA">A Count: {count}</button>;
}

function ChildB({ count, setCount }) {
    return <button onClick={() => setCount(count + 1)} className="btnB">B Count: {count}</button>;
}



export default function Home() {
    const [count, setCount] = useState(0);
    const Ptitle = () => {
        return <h1>{parseInt(100*Math.random())}</h1>;
    };

    return (
        <>
            <Ptitle />
            <ChildA count={count} setCount={setCount} />
            <ChildB count={count} setCount={setCount} />
        </>
    );
}