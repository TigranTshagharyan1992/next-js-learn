import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/browser'}>Browser</Link>
                <Link href={'/client/show'}>Show</Link>
                <Link href={'/client'}>Client</Link>
            </nav>
        </header>
    );
};

export default Header;