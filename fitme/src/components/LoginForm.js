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

    const showUser = () => {
        history.push(`/user`)
    }

    const showAddUserForm = () => {
        history.push(`/addUser`)
    }

    return (
       
        <div className="login" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            
            <form className="form-style" onSubmit={handleSubmit} > 
                <h2> Log in to FitMe</h2>
                <input onChange={handleUsername} value={user} className="form-input" placeholder="Your name"></input>
                {/* <input className="form-input"></input> */}
                <button onClick={() => {
                    showUser();
                    handleSubmit();}} name="submit" className="form-button">Log in</button>
            </form>
            <div className="create-user">
                <p onClick={showAddUserForm} style={{width: "200px", textAlign : "center", color: "grey", cursor: "pointer"}}>Create new account</p>
            </div>
           
        </div>
    )
}

export default LoginForm
