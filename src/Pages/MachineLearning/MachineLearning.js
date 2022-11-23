import React from 'react'
import Grid from "@mui/material/Grid";
import {Outlet} from "react-router-dom";

const MachineLearning = () => {
    return (
        <Grid item xs={8}>
            This is Machine
            <Outlet/>
        </Grid>
    );
}

export default MachineLearning;