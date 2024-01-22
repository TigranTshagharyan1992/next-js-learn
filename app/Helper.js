/**
 *
 * @returns {Promise<any>}
 */
export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
}
/**
 *
 * @returns {Promise<any>}
 */
export const getPost = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const posts = await response.json();
    return posts;
}