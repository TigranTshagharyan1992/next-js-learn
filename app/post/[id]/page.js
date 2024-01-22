import React from 'react';
import {getPost} from "../../Helper";
import PostClient from "../../components/PostClient/page";

/**
 *
 * @param id
 * @param searchParams
 * @returns {Promise<{description, title}>}
 */

export async function generateMetadata({params: {id},searchParams}){
    const post = await getPost(id)
    return {
        title: post.title,
        description: post.body
    }
}

/**
 *
 * @param params
 * @returns {Promise<JSX.Element>}
 * @constructor
 */
const Page = async ({params: {id}}) => {
    const post = await getPost(id)
    return (
        <>
            <PostClient post={post}/>
        </>
    );
};

export default Page;