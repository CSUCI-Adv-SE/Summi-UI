import React from "react";
import "./history.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from "./image1.jpeg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

function History() {
  return (
    <div className="margin-history col">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <img src={image2} alt="image2" className="image-50-percent" />
            <Card.Body>
              <Card.Text>
              The woman is better than Picasso at something, so it is likely that she has failed at it more than him.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src={image3} alt="image3" className="image-50-percent" />
            <Card.Body>
              <Card.Text>
                We can't always need to worry about the people we don't matter near, but we always need to worry about the people we do matter near.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src={image1} alt="image1" className="image-50-percent" />
            <Card.Body>
              <Card.Text>
                The little girl who lived in the story was named Lottie and she was interesting to many children.
                Some people who lived in the story were not interested in talking to my writer because they thought my writer was slouching, idle, and not interested in learning.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </div>
  );
}

export default History;