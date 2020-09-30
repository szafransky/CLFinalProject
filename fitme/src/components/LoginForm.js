import React, { useState } from 'react'
import '../scss/LoginFormStyle.scss'
import '../scss/Font.scss'
import history from './history'

function LoginForm() {
    const [user, setUser] = useState("")
   
    console.log(localStorage.getItem);

    const handleUsername = (event) => {
        // setError("");
        setUser(event.target.value);
    }
    const handleSubmit = (event) => {
        // event.preventDefault();
        localStorage.setItem("name", user);

    }

    const showHome = () => {
        history.push(`/`)
    }

    return (
       
        <div>
            
            <form className="form-style" onSubmit={handleSubmit} > 
                <h2> Log in to FitMe</h2>
                <input onChange={handleUsername} value={user} className="form-input" placeholder="Your name"></input>
                {/* <input className="form-input"></input> */}
                <button onClick={() => {
                    showHome();
                    handleSubmit();}} name="submit" className="form-button">Log in</button>
            </form>
           
        </div>
    )
}

export default LoginForm
