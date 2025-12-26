import React, {useState, createContext} from 'react'

import ComponentB from './ComponentB'
import './props.css'

export const UserContext = createContext();

export const ComponentA =() => {
    const [user, setUser] = useState("Alagba")


    return (
        <div className="box">
            <h2>Component A</h2>
            <h3>{`Hello ${user}`}</h3>
            <UserContext.Provider value={user}>
                <ComponentB />

            </UserContext.Provider>
            


        </div>
    )

}