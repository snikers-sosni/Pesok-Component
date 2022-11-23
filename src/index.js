import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Database from "./Pages/Database/Database";
import Storage from "./Pages/Storage/Storage";
import Hosting from "./Pages/Hosting/Hosting";
import Functions from "./Pages/Functions/Functions";
import MachineLearning from "./Pages/MachineLearning/MachineLearning";
import {ThemeProvider} from "@mui/material/styles";
import {dashboardTheme} from "./dashbroadTheme";
import {rootReducer} from "./Pages/Hosting/rootReducer";
import {createStore} from 'redux'
import {Provider} from "react-redux";

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={dashboardTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="Authentication" element={<Authentication />} />
                        <Route path="Database" element={<Database />} />
                        <Route path="Storage" element={<Storage />} />
                        <Route path="Hosting" element={<Hosting />} />
                        <Route path="Functions" element={<Functions />} />
                        <Route path="MachineLearning" element={<MachineLearning />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
