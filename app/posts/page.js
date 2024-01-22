import React from 'react';
import {getPosts} from "../Helper";
import Link from "next/link";

/**
 *
 * @type {{description: string, title: string}}
 */
export const metadata = {
    title: "testing good",
    description: "br br test mest",
    keywords: 'one,one'
};

/**
 *
 * @returns {Promise<JSX.Element>}
 * @constructor
 */
const Posts =  async () => {

    const posts = await getPosts();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post)=>{
                    return (
                        <li key={post.id}>
                            <Link href={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Posts;