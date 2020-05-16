import React from "react";
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";


interface routerDefinition {
    path: string;
};


const Routes: React.FC = () => {
    return <>
        <BrowserRouter>
            <Route path="/alert-no-save-change">
                alert-no-save-change
            </Route>
        </BrowserRouter>
    </>
}

export default Routes;