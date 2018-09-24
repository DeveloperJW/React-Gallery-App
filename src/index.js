import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/cats" component={App}/>
            <Route path="/dogs" component={App}/>
            <Route path="/computers" component={App}/>
            <Route path="/search/:name" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
