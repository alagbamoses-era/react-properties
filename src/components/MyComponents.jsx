import React, {useState} from "react"
import './props.css'

function MyComponents () {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(7);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Glory")
    }

    const incrementAge = () => {
        setAge( age + 1)
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div className="student">
            <p className="status">Name: {name}</p>
            <button onClick={updateName} className="employee-button">Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge} className="employee-button">Increment Age</button>

            <p>Is Employed: {isEmployed? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus} className="employee-button">Toggle Status</button>
        </div>
    )
}

export default MyComponents