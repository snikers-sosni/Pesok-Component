import React from 'react';
import CommonButton from "../../component/common/commonButton";
import {connect} from "react-redux"
import { incrementlikes, decrementlikes } from "./action";

const Likes = (props) => {
    console.log("render > ",props)
    return (
        <div>
            <CommonButton onClick={props.onIncrementLikes}>🖤 {props.likes}</CommonButton>
            <CommonButton variant="contained" onClick={props.onDecrementLikes}>Dislike</CommonButton>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("mapStateToProps >",state);
    const {likesReducer} = state
    return {
        likes: likesReducer.likes
    }
  
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => {

            return dispatch(incrementlikes());
        },
        onDecrementLikes: () => {
            return dispatch(decrementlikes())
        }
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Likes);