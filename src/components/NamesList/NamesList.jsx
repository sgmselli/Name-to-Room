import React from 'react';

import Person from '../Person/Person'

class NamesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.namesList
        }
    }

    render() {
        return (
            <div className='namesList'>
                <textarea>
                    {this.props.namesList}
                </textarea>
                
            </div>
        )
    }
}

export default NamesList