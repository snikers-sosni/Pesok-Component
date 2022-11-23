import React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "./action";

const Title = (props) => {
    console.log('title >', props)

    const text = useSelector(state => {
        const {TitleReducer} = state;
        return TitleReducer.text;
    })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))

    }

    return (
        <div className="cardTitle">
            <div className="card-title-top">
                <TextField onChange={handleChange}></TextField>
            </div>
            
            <TextareaAutosize
                placeholder={text}
            >

            </TextareaAutosize>
        </div>
    );
};

export default Title;