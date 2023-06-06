import React from 'react';
import './Person.css';

class Person extends React.Component {

    render() {
        return (
            <div className='Person'>
                <h4>{this.props.person.name}</h4>
                <p>{this.props.person.email}</p>
            </div>
        )
    }
}

export default Person