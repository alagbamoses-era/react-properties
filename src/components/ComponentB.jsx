import React, { useContext} from 'react';
import {UserContext } from './ComponentA';
import ComponentC from './ComponentC'
function ComponentB() {

    const user = useContext(UserContext)


    return (
        <div className="box">
            <h2>Component B</h2>
            <h3>{`Welcome ${user}`}</h3>
            <ComponentC />

        </div>
    )

}

export default ComponentB;