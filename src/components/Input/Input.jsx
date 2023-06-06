import React from 'react';

import './Input.css'

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.addName = this.addName.bind(this);
        this.send = this.send.bind(this);
    }

    async send() {

        const min = document.getElementById('min').value;
        const max = document.getElementById('max').value;

        if (max-min > this.props.len) {

            alert('Your room range must not be greater than the amount of names.')

        } else if (max < min) {

            alert('Your maximum room number must be greater than your minimum room number.')

        } else {
            await this.props.nametonum(parseInt(min), parseInt(max));
            this.props.sendemail();

            //add sending animation
            document.getElementById('send').innerHTML = 'Sending';
            document.getElementById('send').classList.add('loading');


        }

        
    }
 
    addName(e) {
        //prevent page reload on submit
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        this.props.add(name, email)

        //clear input fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

    }

    
    
    render() {
        
        return (
            <div className='Inputs container'>
                <div className='person'>
                    <h1 className='text-light'>Name & Email. </h1>
                    <div>
                        <form onSubmit={this.addName}>

                        
                            <input placeholder='Name' id='name' required/>
                            <input placeholder='Email' type='email' id='email' pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*" required/>
                            <button type='submit' className='btn btn-light' >Add</button>
                            
                        </form>
                        
                    </div>
                    
                </div>

                <div >
                    <textarea id="namesList" readOnly />
                </div>
                <div className='numbers'>
                    <h1 className='text-light'>Room range.</h1>
                    <input placeholder='Minimum' id='min' /> 
                    <input placeholder='Maximum' id='max' />
                </div>

                <div>
                    <h1 className='text-light' id='send'>Send. </h1>
                    <button className='btn sendBtn' onClick={this.send}>Send</button>
                    <button className='btn' onClick={this.props.clear} >Clear names</button>
                </div>
                
                     

            </div>
        )
    }
}

export default Input;