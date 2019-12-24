import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import BadgeNew from '../pages/BadgeNew.jsx';
import Badges from '../pages/Badges.jsx';
import NotFound from '../pages/NotFound.jsx';
import Home from '../pages/Home.jsx';
import Layout from './Layout.jsx';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Redirect  from="*" to="/" />
                </Switch>            
            </Layout>
        </BrowserRouter>
    );
}

export  default App;