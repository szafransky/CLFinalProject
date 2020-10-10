import React from 'react'
import {NavLink} from 'react-router-dom'
import history from './history'
import profileImg from '../photos/profile.jpg'
import '../scss/TrainerList.scss'

function Trainer({id, name, surname, age, photo, trainings}) {

    const showProfile = () => {
        history.push(`/trainerProfile/${id}`)
    }
    // console.log(imgURL)

    return (
        <div  className="trainer" onClick={showProfile} style={{padding: "10px 0 10px 30px" ,display: "flex",marginBottom: "10px", cursor: "pointer", alignItems: "center"}}>
            <div style={{ height: "100px", borderRadius: "50%"}}><img style={{width: "100px", height: "100px", borderRadius: "50%"}} src={photo} alt="FitMe Welcome page"></img></div>
            <div className="trainer-info" style={{paddingLeft: "40px"}}>
            <h3>{name} {surname} </h3>
            <h4 style={{lineHeight: "0px"}}>Age: {age}</h4>
            </div>
           
            
            {/* <h4>Trainings</h4>
            <ul>
                
                {trainings.map((training, index) => {
                    
                    return <h4 key={index}>
                       
                        <h4>{training.type}</h4>
                        <h5>Number of trainings: {training.numberOfExercises}</h5>
                        {training.exercises.map((exercise, index) =>{
                            return <li key={index}>{exercise}</li>
                        } )}
                    </h4>
                })}
            </ul> */}
           
        </div>
    )
}

export default Trainer
