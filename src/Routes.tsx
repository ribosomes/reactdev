import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
//
import Index from './alert-no-save-change/Index';

const Routes: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        Index
                        <ul>
                            <li>
                                <Link to="/alert-no-save-change">alert no save changes</Link>
                            </li>
                        </ul>
                        <br />
                    </Route>
                    <Route path="/alert-no-save-change" component={Index} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Routes;
