import React from 'react'
// import {BrowserRouter, Route, Switch } from "react-router-dom";
// import TrainersList from './TrainersList';
// import About from './About';
import Navigation from './Navigation'
// import Home from './Home'
// import TrainerProfile from './TrainerProfile'
import '../scss/Header.scss'
import Routes from './Routes'
import history from './history'
import {Router} from "react-router-dom"
import '../scss/Font.scss'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function Header( {title} ) {
    return (
       
        <Router history={history}>
        <div className="header">
            <h1 style={{textAlign:"center"}}>{title}</h1>
            
            <Navigation />
            {/* <div class="container">
                <div class="menu-icon">
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                </div>
            </div> */}
               
        </div>
        <Routes />
        {/* <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} />
                    <Route path="/trainers" component={TrainersList} />
                    <Route path="/trainerProfile/:id" component={TrainerProfile} />
        </Switch> */}
        </Router>
    )

}

export default Header
