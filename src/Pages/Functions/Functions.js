import React from 'react'
import Grid from "@mui/material/Grid";
import {Outlet} from "react-router-dom";

const Functions = () => {
    return (
        <Grid item xs={8}>
            This is Func
            <Outlet/>
        </Grid>
    );
}

export default Functions;