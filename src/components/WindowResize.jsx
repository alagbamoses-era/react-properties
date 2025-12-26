import React, {useState, useEffect} from 'react';
import './props.css'

export const Window = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("add event")


        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("remove event")

        }

    }, [])

    


    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


    return (
        <div className='window'>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>

    )
}