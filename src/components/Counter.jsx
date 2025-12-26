import React, {useState} from "react";
import './props.css'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () =>
    {
        setCount(count + 1)
    }
    const decrementCount = () =>
    {
        setCount(count - 1)
    }

    const reset = () =>
    {
        setCount(0)
    }


    return (
        <div className="counter-container">
            <h1>This is my Counter</h1>
            <p className="count-display">count: {count}</p>
            <div >
            <button onClick={incrementCount} className="counter-button">Increment</button>
            <button onClick={reset} className="counter-button">Reset</button>
             <button onClick={decrementCount} className="counter-button">Decrement</button>
            </div>
        </div>
    )

}