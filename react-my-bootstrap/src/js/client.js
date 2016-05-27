import React from "react"
import ReactDOM from "react-dom"
import Layout from "./Pages/Layout"
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Featured from "./Pages/Featured"
import Archives from "./Pages/Archives"
import Settings from "./Pages/Settings"

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured} />          
            <Route path="archives" name="archives" component={Archives} />
            <Route path="settings" name="settings" component={Settings} />    
        </Route>
    </Router>, 
 app);
