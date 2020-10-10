import React, { useEffect, useState } from 'react'
import '../scss/TrainerProfile.scss'
import profileImg from '../photos/profile.jpg'
import '../scss/Font.scss'


//mój plan
//pobranie listy userów i przefiltrowanie ich do tego jednego po imieniu 
//(moze) lub zrobic geta i pobrać tylko jednego usera
//Nastepnie po nacisnieciu buttona pobrać dany trening i wstawić go do listy usera i zrobić
//update na users z danym userem.

//Nie rozumiem tego useState i useEffect -> jak moge manipulować danymi z fetcha skoro jest asynchroniczny
// i nie mam do nich dostepu, tylko w return po renderze mam dostęp do danych 


//PS. dodatkowo zapytać co jest nie tak w przekazywaniu propsów w headerze i navigacji (nav)

function TrainerProfile( { match }) {

const [trainer, setTrainer] = useState(false);
const [showListFlag, setShowListFlag] = useState(false);
const [tType, setTType] = useState("");
const [user, setUser] = useState("");


    const getTrainer = () => {
        console.log("Trainer with given id: ", match.params.id)
        fetch(`http://localhost:3000/trainers/${match.params.id}`, {
            method: "GET"
        }).then(response => response.json())
        .then(trainer => setTrainer(trainer))
    }
   
    const fetchAsync = async () => {

        const result = await fetch(`http://localhost:3000/users`, {
                    method: "GET"
                });
        const data = await result.json();
        return data;
     }

    useEffect(() => {

        getTrainer();
       
        fetchAsync().then(res => {
            console.log(res);
            const loggedName = res.filter(u => u.name === localStorage.getItem('name'))
            console.log(loggedName);

            setUser(loggedName[0]);
        })

        console.log(user);

    }, [])

    const addTrainingToUser = (e) => {
        const trainingType =  e.target.parentNode.dataset.value;
        const chosenTraining = trainer.trainings.filter(training => training.type === trainingType);
        
        console.log(chosenTraining);
        fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify( 
            {
                ...user, 
                purchses: [...user.purchses, chosenTraining[0]]
            }
            ),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(obj => obj.json())
        .then(training => {
             console.log(training);
            
         })
        .catch(error => {
          console.log(error);
        //   console.log(training);
          
        });
    }

    const showList = (e) => {
        setShowListFlag(!showListFlag);
        setTType(e.target.dataset.value);
        console.log(showListFlag);
        console.log(tType)

    }

    if(trainer === false){
        return <h1>Fetching...</h1>
    } else {
        return (
            <div className="container">
                {/* <h1>User{user.name}</h1> */}
                <h2 style={{textAlign: "center"}}>Trainer Profile</h2>
                <div className="profile-container">
                <div className="profile-img"><img style={{borderRadius: "50%"}} src={trainer.photo} alt="FitMe Welcome page"></img></div>
                <div className="profile">
                <div className="name-and-age">
                    <h2>{trainer.name} {trainer.surname}</h2>
                    <h3>Age: {trainer.age}</h3>
                </div>
                <p>{trainer.about}</p>
                
                Trainings:
                {trainer.trainings.map((training, index) => {
                    return <div className="profile-training">
                    <div onClick={showList} data-value={training.type} className="training-type">{training.type}<button onClick={addTrainingToUser}>Get training</button></div>
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
