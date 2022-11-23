import {TEXT_INPUT} from './types'



const initialState = {
    text: ''
}


export const TitleReducer = (state = initialState, action) => {
    console.log('text reducer', action)

    switch (action.type) {
        case TEXT_INPUT:
            return {
                ...state,
                text: action.text,
            }
        default:
            return state;
    }
}