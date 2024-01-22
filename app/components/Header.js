import React from 'react';
import Link from "next/link";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
    return (
        <header>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/browser'}>Browser</Link>
                <Link href={'/client/show'}>Show</Link>
                <Link href={'/client'}>Client</Link>
                <Link href={'/posts'}>Posts</Link>
            </nav>
        </header>
    );
};

export default Header;