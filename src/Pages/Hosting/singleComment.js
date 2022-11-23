import React from 'react';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from "react";

const SingleComment = ({data}) => {
    const [text] = data
    const [commentText, setCommentText] = useState('')
    useEffect(()=>{
        if (text) {
            setCommentText(text)
        }
    }, [text])
    return (
        <div>
            <form>
                <div>&times;
                    <input type='text' value={commentText} />
                    <input type='submit' hidden />
                </div>
            </form>
        </div>
    );
};

export default SingleComment;