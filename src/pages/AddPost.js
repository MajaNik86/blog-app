import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AddPostForm } from "../components/AddPostForm";
import PostsService from "../services/PostsService";

export default function AddPost() {
    const { id } = useParams();
    const history = useHistory();

    const [newPost, setNewPost] = useState({
        title: "",
        text: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("usla sam ovde");
        // Prilikom ubacivanja post-a treba samo add
        if (id) {
            PostsService.edit(id, newPost);
        } else {
            PostsService.add(newPost);
        }
        history.push("/posts");
    };

    const handleReset = () => {
        setNewPost({
            title: "",
            text: "",
        });
    };

    const fetchPost = async () => {
        const data = await PostsService.get(id);
        setNewPost(data);
    };

    useEffect(() => {
        if (id) {
            fetchPost(id);
        }
    }, [id]);

    return (
        <div>
            <h2>Add New Post:</h2>
            <AddPostForm
                id={id}
                newPost={newPost}
                setNewPost={setNewPost}
                onReset={handleReset}
                onSubmit={handleSubmit}
            />
        </div>
    );
}
