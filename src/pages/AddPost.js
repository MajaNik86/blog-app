
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AddPostForm } from '../components/AddPostForm';
import PostsService from '../services/PostsService';

export default function AddPost() {
    const { id } = useParams();
    const history = useHistory();

    const [newPost, setNewPost] = useState({
        title: '',
        text: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('usla sam ovde')
        if (id) {
            PostsService.edit(id, newPost)
        } else {
            PostsService.add(newPost);
        }
        history.push('/posts');
    }

    const handleReset = () => {
        setNewPost({
            title: '',
            text: '',
        })
    }

    return <div><h2>Add New Post:</h2>
        <AddPostForm
            newPost={newPost}
            setNewPost={setNewPost}
            onChange={handleSubmit}
            onReset={handleReset} />
    </div>

}