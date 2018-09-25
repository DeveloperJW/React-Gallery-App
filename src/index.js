import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound404 from "./Components/NotFound404";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/search/:name" component={App}/>
            <Route component={NotFound404}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
