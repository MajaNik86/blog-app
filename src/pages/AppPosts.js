import React, { useState, useEffect } from "react";
import PostsService from "../services/PostsService";

export default function AppPosts() {
    const [posts, setPosts] = useState();

    const handleGetPosts = async () => {
        const posts = await PostsService.getAll();
        setPosts(posts);

    }
    useEffect(() => {
        handleGetPosts()
    }, [])

    return (
        <div>
            <h3>List of posts:</h3>
            <ul>
                {posts && posts.map((post) => (<li key={post.id}>{post.title}</li>))}
            </ul>
        </div>)
}