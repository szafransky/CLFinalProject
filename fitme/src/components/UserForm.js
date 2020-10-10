import React, {useState, useEffect} from 'react'
import '../scss/LoginFormStyle.scss'
import history from './history'

function UserForm() {

    const [newMetrics, setNewMetrics] = useState([]);
    const [user, setUser] = useState("");
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [waist, setWaist] = useState();
    const [error, setError] = useState("");

    // let loggedHeight = "232";
    

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
       
        let isnum = /^\d+$/;
        if(!isnum.test(height)) {
            
            setError("Only numbers!");
            return;
        }

        if(!isnum.test(weight)) {
            
            setError("Only numbers!");
            return;
        }

        if(!isnum.test(waist)) {
           
            setError("Only numbers!");
            return;
        }
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
            // loggedHeight = loggedName[0].metrics[0];
            // console.log(loggedHeight)
            setUser(loggedName[0]);
            setHeight(loggedName[0].metrics[0])
            setWeight(loggedName[0].metrics[1])
            setWaist(loggedName[0].metrics[2])
        })

      
        
    }, [])

    const handleHeight = (e) => {
        setError("");
        setHeight(e.target.value);
    }

    const handleWeight = (e) => {
        setError("");
        setWeight(e.target.value);
    }

    const handleWaist = (e) => {
        setError("");
        setWaist(e.target.value);
    }

    return (
        <div className="user-form">
          
            <form onSubmit={(e) => {addMetricsToUser(e)}} className="form-style">
            <h2 style={{textAlign: "center"}}>Your metrics</h2>
            <input value={height}  onChange={(e) => {handleHeight(e)}} className="form-input" placeholder="Height"></input>
            <input value={weight}  onChange={(e) => {handleWeight(e)}} className="form-input" placeholder="Weight"></input>
            <input value={waist}  onChange={(e) => {handleWaist(e)}} className="form-input" placeholder="Waist"></input>
            {error && <p style={{color:"red"}}>Popełniłes błąd: {error}</p>}
            <button name="submit" className="form-button">Submit</button>
            </form>
           
            
        </div>
    )
}

export default UserForm
