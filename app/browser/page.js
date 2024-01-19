'use client';
import {useState} from "react";
import Link from "next/link";

export default function Browser() {
   const [value, setValue] = useState();
    return (
        <>
            <h1>On Cleint side</h1>
            <div><Link href={'/'}>Home</Link></div>
            <div> <Link href={'/client'}>Client</Link></div>
        </>

    )
}