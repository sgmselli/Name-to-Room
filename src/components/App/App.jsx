import React from 'react';
import './App.css';

import Email from '../EmailSender/sender';
import Input from '../Input/Input';

class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          names: [],
          origSeq: [],
      }
    this.nameToNum = this.nameToNum.bind(this);
    this.addName = this.addName.bind(this);
    this.sendEmails = this.sendEmails.bind(this);
    this.clear = this.clear.bind(this);
    }

  nameToNum(min, max) {
    const names = this.state['names'];

    let seq = []
    for(let i=min; i<max+1; i++) {
      seq.push(i);
    }

    for(let i=0; i<names.length; i++) {
        let l = seq.length-1
        const randomIdx = Math.floor(Math.random() * l)
        console.log(seq[randomIdx])
        names[i].num = seq[randomIdx]
        seq.splice(randomIdx, 1)
    }
  }

  sendEmails() {
    for(let i=0; i<this.state['names'].length; i++) {
      Email(this.state['names'][i].name, this.state['names'][i].email, this.state['names'][i].num)
    }
  }

  addName(name, email) {
    const person = {
      name: name,
      email: email,
      num:0,
    }

    const newNames = (this.state['names'])
    newNames.push(person)
    this.setState({names: newNames})
    

    document.getElementById('namesList').innerHTML = (this.state['names']).map((person) => {
      return person.name+':   '+person.email+ '\n'
    })

  }

  clear() {
    this.setState({names: []})
    document.getElementById('namesList').innerHTML = '';
  }

  render() {
    return (
      <div className="App">
        
        <div className='row'>
          <div className='col-xl-5 instructions'>
              <div className='header'>
                <h2>name<mark>2</mark>room</h2>
                <h2>🚪</h2>
              </div>

              <div className='banner'>
                <h1><mark>#1</mark> random<br /> room to name<br />generator,<br />sent via email.</h1>
              </div>

              <div className='footer'>
                <p>Step 1: Enter your names and emails</p>
                <p>Step 2: Select your room number range</p>
                <p>Step 3: Click send and check your emails!</p>
              </div>
          </div>
            
          <div className='col-xl-7 form'>
            <Input add={this.addName} sendemail={this.sendEmails} nametonum={this.nameToNum} clear={this.clear} len={this.state['names'].length}/>
            
          </div>
        </div>
        
      </div>
    )
  }
    
}

export default App;
