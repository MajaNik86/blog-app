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

    const handleDelete = async (id) => {
        const data = await PostsService.delete(id);
        if (data.count > 0) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    }


    return (
        <div>
            <h3>List of posts:</h3>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post.id}>{post.title}
                        <Link to={`/posts/${post.id}`}>View Post</Link>
                        <Link to={`/edit/${post.id}`}>Edit</Link>
                        {/* moram proslediti post.id */}
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>))}
            </ul>
        </div>)
}