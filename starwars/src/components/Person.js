import React from 'react';
import './StarWars.css';

const Person = props => {
return <div className='person'> 
    <div className='name'>Character: {props.list.name}</div>
    <div className='date'>Birthdate: {props.list.birth_year}</div>
</div>
}

export default Person