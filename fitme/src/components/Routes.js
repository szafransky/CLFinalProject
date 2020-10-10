import React from 'react'
import TrainersList from './TrainersList'
import TrainerProfile from './TrainerProfile'
import Home from './Home'
import About from './About'

import {Route, Switch } from "react-router-dom";
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import UserForm from './UserForm'
import CreateUserForm from './CreateUserForm'

function Routes() {

    return (
        <div>
            {/* <Router history={history}> */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/trainers" component={TrainersList} />
                    <Route path="/trainerProfile/:id" component={TrainerProfile} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/user" component={UserProfile} />
                    <Route path="/userForm" component={UserForm} />
                    <Route path="/addUser" component={CreateUserForm} />
                </Switch>
            {/* </Router> */}
        </div>
    )
}

export default Routes
