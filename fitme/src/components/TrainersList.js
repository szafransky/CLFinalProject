import React, {useState, useEffect} from 'react'
import Trainer from './Trainer';
import '../scss/TrainerList.scss'

function TrainersList() {

const [trainers, setTrainers] = useState(false);


useEffect(() => {
    fetchAllTrainers();
}, [])

const fetchAllTrainers =  () => {
            fetch('http://localhost:3000/trainers')
                .then(resp => resp.json())
                .then(allTrainers => setTrainers(allTrainers))
            
            
        }
// const { data, error, isLoading } = useAsync({ promiseFn: fetchAllTrainers })
//   if (isLoading) return "Loading..."
//   if (error) return `Something went wrong: ${error.message}`
//   if (data)
        if(trainers === false) {

            return <div style={{marginTop: "100px"}}>
                <div className="icon">
                <img style={{width: "70px"}} src={require('../photos/loadingDumbell.jpg')} />
                </div>
                </div>
        }
    return (
        <div className="list-container">
            <div className="trainer-list">
                <h2 style={{textAlign: "center", marginBottom: "60px"}}>Our trainers</h2>
                {trainers.map((trainer,index) => {
                //  return <li key={index}>{trainer.name}</li>
                     return <Trainer  key={trainer.id} {...trainer} />
                })}
            </div>
        </div>
       
    )
}

export default TrainersList
