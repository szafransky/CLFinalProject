import React from 'react'

import '../scss/Header.scss'
import '../scss/Home.scss'
import history from './history'

function Main() {

    const showLogin = () => {
        history.push(`/login`)
    }
    return (
        <div className="home">
            {/* <Link to={"/"}>Home</Link> */}
            <div className="container">
                <div className="slide1">
                    <div className="box">
                    <h2 style={{cursor: "pointer"}}>FitMe</h2>
                    <p>Your personal trainer in one app</p>
                    </div>
                   
                </div>
                <div className="slide2">
                    <div className="box">
                    <p>Find your personal trainer among thousands</p>
                    </div>

                </div>
                <div style={{cursor: "pointer"}} onClick={showLogin} className="slide3">
                    <div className="box">
                    <p>Register now!</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Main
