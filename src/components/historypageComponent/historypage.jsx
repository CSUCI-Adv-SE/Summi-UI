import React, { Component } from "react";
import "./history.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import get_request_headers from "../utils/requestHeaders";
import { config } from "../../constants";
import { NotificationManager } from "react-notifications";
import Button from "react-bootstrap/Button";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = { flag: false, user_history: [] };
  }

  componentDidMount() {
    axios
      .post(config.url.API_URL + "/history/", {}, get_request_headers())
      .then((resp) => {
        if (resp.data["status"] !== 200) {
          NotificationManager.error(resp.data.message, "Error", 5000);
          return;
        } else {
          this.setState({
            flag: true,
            user_history: resp.data.history,
          });
        }
      })
      .catch((error) => {
        NotificationManager.error(error.message, "Error", 5000);
        return;
      });
  }

  render() {
    return (
      <>
        {this.state.flag ? (
          !this.state.user_history.length ? (
            <div className="margin-history col">
              <Card className="text-center">
                <Card.Header>History</Card.Header>
                <Card.Body>
                  <Card.Title>No History Found!</Card.Title>
                  <Card.Text>
                    We haven't found your history. <br /> Please use the below
                    link to get started!
                  </Card.Text>
                  <Button variant="primary" href="/">
                    Go Home
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div className="margin-history col">
              <Row xs={1} md={4} className="g-4">
                {this.state.user_history.map((history_card, index) => (
                  <Col key={index}>
                    <Card>
                      <img
                        src={
                          history_card.image_path.startsWith("https://")
                            ? history_card.image_path
                            : config.url.API_URL + history_card.image_path
                        }
                        alt="user_image"
                        className="result-page-image"
                      />
                      <Card.Body>
                        <Card.Text>{history_card.image_summary}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )
        ) : (
          <div className="col">
            <h4> getting data </h4>
          </div>
        )}
      </>
    );
  }
}

export default History;
