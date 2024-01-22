'use client';
import React from 'react';
import Link from "next/link";

const PostClient = ({post}) => {
    return (
        <>
            <br/>
            <br/>
            <div>
                <Link href={'/'}>Back</Link>
            </div>
            <br/>
            <div className='user'>
                <p>
                    {post.title}
                </p>
                <p>
                    {post.body}
                </p>
                <p>
                    User id  {post.userId}
                </p>
            </div>

        </>
    );
};

export default PostClient;