import React from 'react';
import TextField from '@mui/material/TextField';
import SingleComment from "./singleComment";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { commentCreate } from "./action";
import uniqid from 'uniqid'

const Comments = (props) => {
    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        const {CommentsReducer} = state;
        return CommentsReducer.comments;
    })

    console.log("com",comments)

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    }

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type='text' value={textComment} onChange={handleInput}/>
                <input type='submit' hidden />
            </form>
            {comments.length ? comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            }) : <p></p>}
        </div>
    )
};

export default Comments;