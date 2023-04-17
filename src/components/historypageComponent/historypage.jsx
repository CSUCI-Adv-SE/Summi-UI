import React from "react";
import "./history.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function History() {
  return (
    <div className="margin-history col">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="./image2.jpg" />
              <Card.Body>
                <Card.Title>The woman is better than Picasso at something, so it is likely that she has failed at it more than him.</Card.Title>
                <Card.Text>
                  The little girl who lived in the story was named Lottie and she was interesting to many children.
                  Some people who lived in the story were not interested in talking to my writer because they thought my writer was slouching, idle, and not interested in learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default History;