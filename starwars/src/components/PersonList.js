import React from 'react';
import Person from './Person'
import './StarWars.css';

const PersonList = props => {
    let newList = [...props.list]
    return  <div className='personList'>{newList.map(list => <Person list={list}/>)}</div>
}

export default PersonList