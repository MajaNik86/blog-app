import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostsService from '../services/PostsService';
import SinglePostComponent from '../components/SinglePostComponent'
import AddComment from './AddComment';



export default function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        const handleGetId = async () => {
            const post = await PostsService.get(id)
            setPost(post)
        }
        handleGetId();
    }, [id])

    const handleAddComment = (comment) => {
        setPost({ ...post, comments: [...post.comments, comment] });
    };


    return (
        <div>
            <SinglePostComponent
                key={post.id}
                // id={post.id}
                post={post}
                title={post.title}
                text={post.text}
            />
            <AddComment
                postId={post.id}
                addCommentFunction={handleAddComment}
            />
        </div>
    )
}