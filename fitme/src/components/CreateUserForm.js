import React, { useEffect } from 'react'
import '../scss/LoginFormStyle.scss'
import '../scss/Font.scss'
import history from './history'
import { useState } from 'react'



function CreateUserForm() {

const [name, setName] = useState();
const [surname, setSurname] = useState();
const [height, setHeight] = useState();
const [weight, setWeight] = useState();
const [waist, setWaist] = useState();
const [count, setCount] = useState();

const fetchUsers = async () => {

    const result = await fetch(`http://localhost:3000/users`, {
                method: "GET"
            });
    const data = await result.json();
    return data;
 }

const showUserProfile = () => {
    history.push(`/user`)
}

const addUser = async (event) => {
    event.preventDefault()
    // const trainingType =  e.target.parentNode.dataset.value;
    // const chosenTraining = trainer.trainings.filter(training => training.type === trainingType);
    console.log("owdnwindinjwnejednji")
    // console.log(chosenTraining);
    await fetch(`http://localhost:3000/users`, {
    method: "POST",
    body: JSON.stringify( 
        
            {
                "id": count + 1,
                "name": name,
                "photo": "../photos/filip.png",
                "metrics": [
                  height,
                  weight,
                  waist
                ],
                "purchses": [
                ]
            }
        
        ),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(obj => obj.json())
    .then(user => {
         console.log();
         localStorage.setItem("name", name);
        
     })
    .catch(error => {
      console.log(error);
    //   console.log(training);
      
    });
    showUserProfile();
}

useEffect(() => {
    
    fetchUsers().then(data => setCount(data.length));

    
}, [])




    return (
        <div>
          
            <form onSubmit={(e) => {addUser(e)}} className="form-style">
            <h2 style={{textAlign: "center"}}>Create new user</h2>
            <input value={name}  onChange={(e) => {
                setName(e.target.value);
                
            }} 
                className="form-input" 
                placeholder="Name"></input>
            <input value={surname}  onChange={(e) => {setSurname(e.target.value)}} className="form-input" placeholder="Surname"></input>
            <input value={height}  onChange={(e) => {setHeight(e.target.value)}} className="form-input" placeholder="Height"></input>
            <input value={weight}  onChange={(e) => {setWeight(e.target.value)}} className="form-input" placeholder="Weight"></input>
            <input value={waist}  onChange={(e) => {setWaist(e.target.value)}} className="form-input" placeholder="Waist"></input>
            
            <button name="submit" className="form-button">Submit</button>
            </form>
           
            
        </div>
    )
}

export default CreateUserForm
