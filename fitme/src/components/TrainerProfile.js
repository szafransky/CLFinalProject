import React, { useEffect, useState } from 'react'
import '../scss/TrainerProfile.scss'
import profileImg from '../photos/profile.jpg'
import '../scss/Font.scss'

function TrainerProfile( { match }) {

const [trainer, setTrainer] = useState(false);
const [showListFlag, setShowListFlag] = useState(false);
const [tType, setTType] = useState("");


    const getTrainer = () => {
        console.log("Trainer with given id: ", match.params.id)
        fetch(`http://localhost:3000/trainers/${match.params.id}`, {
            method: "GET"
        }).then(response => response.json())
        .then(trainer => setTrainer(trainer))
    }

    useEffect(() => {
        getTrainer();
        console.log(trainer);
       
    }, [])

    const showList = (e) => {
        setShowListFlag(true);
        setTType(e.target.dataset.value);
        console.log(showListFlag);
        console.log(tType)

    }

    if(trainer === false){
        return <h1>Fetching...</h1>
    } else {
        return (
            <div className="container">
                <h2 style={{textAlign: "center"}}>Trainer Profile</h2>
                <div className="profile-container">
                <div className="profile-img"><img style={{borderRadius: "50%"}} src={profileImg} alt="FitMe Welcome page"></img></div>
                <div className="profile">
                <div className="name-and-age">
                    <h2>{trainer.name} {trainer.surname}</h2>
                    <h3>Age: {trainer.age}</h3>
                </div>
                <p>{trainer.about}</p>
                
                Trainings:
                {trainer.trainings.map((training, index) => {
                    return <div className="profile-training">
                    <div onClick={showList} data-value={training.type} className="training-type">{training.type}<button >Get training</button></div>
                    {training.exercises.map((exercise, index) => {
                        if(training.type === tType && showListFlag === true ){
                            return <div className="exercise">{exercise}</div>
                        } else return null;
                        
                    })}
                    
                    </div>
                    })}
                </div>  
                </div>
               
            </div>
        )
    }

   
}

export default TrainerProfile
