import React, {useState, useEffect} from "react";
import "./history.css"
import Card from 'react-bootstrap/Card';

function History() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="./A_Little_Princess.jpeg" />
        <Card.Body>
          <Card.Text>
            The little girl who lived in the story was named Lottie and she was interesting to many children. 
            Some people who lived in the story were not interested in talking to my writer because they thought my writer was slouching, idle, and not interested in learning.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="top" src="./image2.jpg" />
        <Card.Body>
          <Card.Text>
            The woman is better than Picasso at something, so it is likely that she has failed at it more than him.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="top" src="./image3.jpeg" />
        <Card.Body>
          <Card.Text>
            We can't always need to worry about the people we don't matter near, but we always need to worry about the people we do matter near
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default History;