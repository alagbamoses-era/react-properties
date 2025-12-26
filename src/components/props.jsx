import React from "react";
import PropTypes from 'prop-types'
import './props.css'

export const Students =(props) => {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Sex: {props.sex}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "Yes" : "no"}</p>
            <p>Monthly Income: £{props.income}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}

Students.propTypes = {
    name: PropTypes.string,
    sex: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Students.defaultProps = {
    name: "Guest",
    sex: "none",
    age: 0,
    isStudent: false
}