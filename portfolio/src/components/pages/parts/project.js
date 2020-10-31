import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Project(props) {

        return (<Card style={{ width: '30rem', borderRadius:'10px', marginTop:'1%', marginBottom: '1%', backgroundColor: 'darkgrey' }}>
        <Card.Img style={{padding:'5px', borderRadius:'10px'}} variant="top" src={props.img} />
        <Card.Body style = {{borderTop: "2px solid black"}}>
        <Card.Title>{props.name}</Card.Title>
          <Card.Text>
        {props.description}
          </Card.Text>
          <Button variant="success" href = {props.link}>Go There</Button>
        </Card.Body>
      </Card>)
    }

export default Project;