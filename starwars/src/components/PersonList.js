import React from 'react';
import Person from './Person'
import './StarWars.css';

const PersonList = props => {
    let newList = [...props.list]
    return newList.map(list => <Person list={list}/>)
}

export default PersonList