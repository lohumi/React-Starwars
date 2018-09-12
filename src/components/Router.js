import React from 'react';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import App from '../App';
import Login from '../components/Login';
import Planet from './Planet';


const Router=()=>(
    <div>
    <BrowserRouter>
    <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/Planets" component={App} />
        <Route path="/Planet/:id" component={Planet}/>
    </Switch>
    </BrowserRouter>

    </div>
);
export default Router;