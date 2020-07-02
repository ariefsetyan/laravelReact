import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from './components/Home';
  import Edit from './components/Edit';
  import Add from './components/Add';

function Index() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/add' exact component={Add}/>
                <Route path='/:id/edit' exact component={Edit}/>
            </Switch>
        </Router>
    );
}

export default Index;
if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}