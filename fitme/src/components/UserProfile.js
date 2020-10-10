import React, { useEffect, useState } from 'react'
import '../scss/TrainerProfile.scss'
import profileImg from '../photos/profile.jpg'
import '../scss/Font.scss'
import history from './history'
function UserProfile() {
    const [userList, setUserList] = useState(false);
    const [user, setUser] = useState(false);
    const [showListFlag, setShowListFlag] = useState(false);
    const [tType, setTType] = useState("");


    let apiUsers = [];
        const getUsers = () => {
            console.log("User with given name: ", localStorage.getItem("name"))
            fetch(`http://localhost:3000/users`, {
                method: "GET"
            }).then(response => response.json())
            .then(users => {setUserList(users)
              
                // setUserList(users, () => setUser(userList.filter(el => {
                //     return el.name === localStorage.getItem("name");
                // })));
                
            })
        }

       

        const showMetrcs = () => {
            history.push(`/userForm`)
        }

        const showList = (e) => {
            setShowListFlag(!showListFlag);
            setTType(e.target.dataset.value);
            console.log(showListFlag);
            console.log(tType)
    
        }


        useEffect(() => {

            getUsers();
            // console.log("before the loop: " + apiUsers + " " + userList);
            
            console.log("Useeffect " + userList);
        }, [user])


        console.log(localStorage.getItem("name"));
    // console.log( userList);
    console.log( "user" + user);
        if(userList === false){

            return <h1>Fetching...</h1>

        } else if (localStorage.getItem("name") == "") {

            return <h1 style={{textAlign: "center"}}>User not found - create new user</h1>
        
        }
        else {
            //TO MI SIE NIE PODOBA ALE DZIAŁA
           const user = userList && userList.filter(el => {
            return el.name === localStorage.getItem("name")
            });
            console.log(user[0].photo);
            

            return (
                
                <div className="container">
                    <h2 style={{textAlign: "center"}}>User Profile</h2>
                    <div className="profile-container">
                    <div className="profile-img"><img style={{borderRadius: "50%"}} src={user[0].photo} alt="FitMe Welcome page"></img></div>
                    <div className="profile">
                    <div className="name-and-age">
                        <h2>{user[0].name}</h2>
                        <div className="metrics">
                            <h3>Your metrics</h3>
                            <h4>{`Height ${user[0].metrics[0]} cm`}</h4>
                            <h4>{`Weight ${user[0].metrics[1]} kg`}</h4>
                            <h4>{`Waist ${user[0].metrics[2]} cm`}</h4>
                            <h4>{`BMI ${Math.floor(Number.parseInt(user[0].metrics[1]/Math.pow(Number.parseInt(user[0].metrics[0])/100, 2)))}`}</h4>
                            <button onClick={showMetrcs}>Change metrics</button>
                        </div>
                      
                        
                        <h3>Trainings</h3>

                     {user[0].purchses.length === 0 ? <p>No training plans</p> : user[0].purchses.map((training, index) => {
                    return <div className ="profile-training">
                    <div onClick={showList} data-value={training.type} className="training-type">{training.type}</div>
                    
                    {training.exercises.map((exercise, index) => {
                        
                        if(training.type === tType && showListFlag === true ){
                            return <div className="exercise">{exercise}</div>
                        } else return null; 
                    })}
                    
                    </div>
                    })}

                       
                    </div>
                    {/* <p>{trainer.about}</p> */}
                    </div>  
                    </div>
                </div>
            )
}
}
export default UserProfile