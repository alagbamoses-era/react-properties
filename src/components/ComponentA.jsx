import React, {useState} from 'react'

import ComponentB from './ComponentB'


import './props.css'

export const ComponentA =() => {
    const [user, setUser] = useState("Alagba")


    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB />


        </div>
    )

}