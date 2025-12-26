import React, {useState, useEffect} from "react";
import './props.css'

function Components () {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function reset() {
        setCount(0);
    }

    function changeColor() {
        setColor(c => c === "green"? "red" : "green")
    }

    return (
        <div className="counter-container">
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount} className="employee-button">Add</button>
        <button onClick={reset} className="employee-button">Reset</button>
        <button onClick={subtractCount} className="employee-button">Subtract</button> 
        <br/>
        <button onClick={changeColor}className="employee-button">Change Color</button>

        
        </div >
    )
}

export default Components;