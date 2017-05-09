import {render} from 'react-dom'
import React from 'react'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import App from './components/App'

const containerEl = document.getElementById("main");

setTimeout(() => { //fixes issues with FOUC
    render((
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path="/"/>
                <Route path="team"/>
                <Route path="vision"/>
                <Route path="contacts"/>
            </Route>
        </Router>
    ), containerEl);
}, 0)
