import React from 'react'
import {NavLink} from 'react-router-dom'
import '../scss/Header.scss'

function Navigation() {
    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trainers">Trainers</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/user">User Profile</NavLink>
        </div>
    )
}

export default Navigation
