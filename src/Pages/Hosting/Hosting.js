import React from 'react'
import Grid from "@mui/material/Grid";
import {Outlet} from "react-router-dom";
import Likes from "./Likes";
import Title from "./Title";
import Comments from "./comments";

const Hosting = () => {
    return (
        <Grid item xs={8}>
                <Likes  />
                <Title />
            <Outlet/>
            <div>
                <Comments/>
            </div>
        </Grid>
    );
}

export default Hosting;