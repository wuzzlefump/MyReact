import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Paul from '../../images/Paul.jpg'

class Profile extends Component{

    render(){
        return (<div style = {{display: 'flex', justifyContent: 'space-around', marginTop: '5%'}}><Card style={{ width: '35rem', borderRadius: '15px'}}>
        <Card.Img variant="top" src={Paul} />
        <Card.Body>
          <Card.Title>Paul Elliott</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card></div>)
    }
}

export default Profile;