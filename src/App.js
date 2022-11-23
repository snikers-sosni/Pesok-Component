import './App.css';
import Navbar from "./component/Navbar";
import Grid from '@mui/material/Grid';
import {Outlet, useLocation} from 'react-router-dom'
import Header from "./component/Header/Header";
import {useEffect, useState} from "react";

function App() {
    const [title, setTitle] = useState(null)
    const location = useLocation()

    useEffect(()=> {
        const pastTitle = location.pathname.replace(/\W/g," ")
        setTitle(pastTitle)
    },[location])


    return (
       <Grid container>
         <>
           <Header title={title}/>
           <Navbar/>
           <Outlet/>
         </>
       </Grid>
    );
}

export default App;
