import React, {Component} from 'react';

import {Card} from 'react-bootstrap';

class PersonCard extends Component {
    render(){
        const { firstName, lastName, age, hair } = this.props;
        
        return(
            <Card className='m-3'>
                <Card.Header>{lastName}, {firstName}</Card.Header>
                <Card.Body>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hair}</p>
                </Card.Body>
            </Card>
        );
    }
}

export default PersonCard;