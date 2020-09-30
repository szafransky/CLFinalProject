import React, { useEffect, useState } from 'react'
import '../scss/TrainerProfile.scss'
import profileImg from '../photos/profile.jpg'
import '../scss/Font.scss'
function UserProfile() {
    const [userList, setUserList] = useState(false);
    const [user, setUser] = useState(false);
    let apiUsers = [];
        const getUsers = () => {
            console.log("User with given name: ", localStorage.getItem("name"))
            fetch(`http://localhost:3000/users`, {
                method: "GET"
            }).then(response => response.json())
            .then(users => { 
                setUserList(users);
                setUser(userList.filter(el => {
                    return el.name === localStorage.getItem("name");
                }));
            })
        }
        useEffect(() => {
            getUsers();
            console.log("before the loop: " + apiUsers + " " + userList)
            // if(userList !== false) {
            //     console.log( "inside" + userList)
            //     setUser(userList.filter(el => {
            //         return el.name === localStorage.getItem("name");
            //     }));
            // }
            console.log("Useeffect " + apiUsers);
        }, [])
        console.log( userList[0]);
    // console.log( userList);
    // console.log( "user" + user);
        if(user === false){
            setUser(userList[0]);
            return <h1>Fetching...</h1>
        } else {
            return (
                <div className="container">
                    <h2 style={{textAlign: "center"}}>User Profile</h2>
                    <div className="profile-container">
                    <div className="profile-img"><img style={{borderRadius: "50%"}} src={profileImg} alt="FitMe Welcome page"></img></div>
                    <div className="profile">
                    <div className="name-and-age">
                        <h2>{user}</h2>
                    </div>
                    {/* <p>{trainer.about}</p> */}
                    </div>  
                    </div>
                </div>
            )
}
}
export default UserProfile