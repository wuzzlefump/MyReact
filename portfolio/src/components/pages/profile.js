import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Paul from '../../images/Paul.jpg'
import Footer from '../footer'

class Profile extends Component{

    render(){
        return (<div style = {{display: 'flex', justifyContent: 'space-around', marginTop: '5%'}}><Card style={{ width: '35rem', borderRadius: '15px'}}>
        <Card.Img variant="top" src={Paul} />
        <Card.Body>
          <Card.Title>Paul Elliott</Card.Title>
          <Card.Text>
            By day Paul is a Ballroom Dance Instructor, By night he is a web developer. Regardless of the time of day paul loves to put his creative mind to work.
          </Card.Text>
        </Card.Body>
      </Card></div>)
    }
}

export default Profile;