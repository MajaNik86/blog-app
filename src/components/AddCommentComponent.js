import React from "react";
import classes from "./AddForm.module.css";

export default function AddCommentComponent({
    comment,
    setComment,
    onSubmitComment,
}) {
    return (
        <div>

            <form className={classes.form} onSubmit={onSubmitComment}>
                <div className={classes.control}>
                    <label> Add comment:</label>
                    <input
                        required
                        type="text"
                        value={comment.text}
                        onChange={({ target }) =>
                            setComment({ ...comment, text: target.value })
                        }
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Submit Comment</button>
                </div>
            </form>
        </div>
    );
}
