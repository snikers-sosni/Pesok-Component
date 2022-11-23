import {COMMENT_CREATE} from './types'
import comments from "./comments";



const initialState = {
    comments: []
}


export const CommentsReducer = (state = initialState, action) => {
    console.log('comments reducer', action)

    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data],
            }
        default:
            return state;
    }
}