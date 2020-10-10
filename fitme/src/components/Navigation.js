import React,{ useState} from 'react'
import {NavLink} from 'react-router-dom'
import '../scss/Header.scss'

function Navigation( {status, onClick} ) {
    console.log(`Status nawigacji : ${status}`);

    const [display, setDisplay] = useState(status);

    // const handleClick = () => {
    //     setDisplay(!display);
    //     console.log("Clicked")
        
    // }
    
    return (
        
        // <div style={{display : display ? "flex" : "none"}} className="nav" >
        <div  className="nav" >
            <NavLink onClick={onClick} to="/">Home</NavLink>
            <NavLink onClick={onClick} to="/trainers">Trainers</NavLink>
           
            <NavLink onClick={onClick} to="/login">Log In</NavLink>
            <NavLink onClick={onClick} to="/user">User Profile</NavLink>
            <NavLink onClick={onClick} to="/about">About</NavLink>
        </div>
    )
}

export default Navigation
