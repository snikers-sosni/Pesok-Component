import {combineReducers} from "redux";
import {likesReducer} from "./LikesReducer";
import {TitleReducer} from "./TitleReducer";
import {CommentsReducer} from "./CommentsReducer";

export const rootReducer = combineReducers({
    likesReducer: likesReducer,
    TitleReducer: TitleReducer,
    CommentsReducer: CommentsReducer,
})