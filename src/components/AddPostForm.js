import React from "react";
import classes from './AddForm.module.css';


export const AddPostForm = ({ id, newPost, setNewPost, onSubmit, onReset }) => {

    return (
        <div>
            <form className={classes.form} onSubmit={onSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Title:</label>
                    <input
                        required
                        minLength='2'
                        type="text"
                        id="title"
                        value={newPost.title}
                        onChange={({ target }) =>
                            setNewPost({ ...newPost, title: target.value })
                        }
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Text:</label>
                    <input
                        required
                        maxLength='300'
                        type="text"
                        id="text"
                        value={newPost.text}
                        onChange={({ target }) =>
                            setNewPost({ ...newPost, text: target.value })
                        }
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit">{id ? 'Edit' : "Add Post"}</button>
                </div>
                <div className={classes.actions}>
                    <button type="button" onClick={onReset}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )

}