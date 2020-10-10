import React, {useState, useEffect} from 'react'
import '../scss/LoginFormStyle.scss'
import history from './history'

function UserForm() {

    const [newMetrics, setNewMetrics] = useState([]);
    const [user, setUser] = useState("");
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [waist, setWaist] = useState();

    
    

    const showUserProfile = () => {
        history.push(`/user`)
    }

    const fetchUsers = async () => {

        const result = await fetch(`http://localhost:3000/users`, {
                    method: "GET"
                });
        const data = await result.json();
        return data;
     }

     const addMetricsToUser = async (event) => {
        event.preventDefault()
        // const trainingType =  e.target.parentNode.dataset.value;
        // const chosenTraining = trainer.trainings.filter(training => training.type === trainingType);
        console.log("owdnwindinjwnejednji")
        // console.log(chosenTraining);
        await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify( 
            {
                ...user, 
                metrics: [height, weight, waist]
            }
            ),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(obj => obj.json())
        .then(user => {
             console.log(user);
            
         })
        .catch(error => {
          console.log(error);
        //   console.log(training);
          
        });
        showUserProfile();
    }

    useEffect(() => {
        fetchUsers().then(res => {
            console.log(res);
            const loggedName = res.filter(u => {
                console.log(u);
                return u.name === localStorage.getItem('name');
            });
            console.log(loggedName[0]);

            setUser(loggedName[0]);
        })

        console.log(user);
        
    }, [])

    return (
        <div className="user-form">
          
            <form onSubmit={(e) => {addMetricsToUser(e)}} className="form-style">
            <h2 style={{textAlign: "center"}}>Your metrics</h2>
            <input value={height}  onChange={(e) => {setHeight(e.target.value)}} className="form-input" placeholder="Height"></input>
            <input value={weight}  onChange={(e) => {setWeight(e.target.value)}} className="form-input" placeholder="Weight"></input>
            <input value={waist}  onChange={(e) => {setWaist(e.target.value)}} className="form-input" placeholder="Waist"></input>
            
            <button name="submit" className="form-button">Submit</button>
            </form>
           
            
        </div>
    )
}

export default UserForm
