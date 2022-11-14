import React, { useState, useEffect } from "react";
import PostsService from "../services/PostsService";
import { Link } from "react-router-dom";


export default function AppPosts() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const data = await PostsService.getAll();

            setPosts(data);
        };
        fetchPosts();
    }, []);




    return (
        <div>
            <h3>List of posts:</h3>
            <ul>
                {posts && posts.map((post) => (<li key={post.id}>{post.title} <Link to={`/posts/${post.id}`}>View Post</Link> <Link to={`/edit/${post.id}`}>Edit</Link> </li>))}
            </ul>
        </div>)
}