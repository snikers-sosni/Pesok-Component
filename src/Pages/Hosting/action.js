import {INCREMENT, DECREMENT, TEXT_INPUT, COMMENT_CREATE} from './types'


export function incrementlikes() {
    return {
        type: INCREMENT
    }
}

export function decrementlikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: TEXT_INPUT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}
