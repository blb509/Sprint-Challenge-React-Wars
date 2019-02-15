import React from 'react';
import './StarWars.css';

const Person = props => {
return <div> 
Character: {props.list.name}   Birthdate: {props.list.birth_year}
</div>
}

export default Person