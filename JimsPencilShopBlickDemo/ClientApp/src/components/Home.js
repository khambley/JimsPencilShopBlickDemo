import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <Grid>
            <Row>
                <h1 className="text-center">Welcome to Jim's Pencil Shop!</h1>  
            </Row>
            <Row className="show-grid">
                <Col md={4}>1 of 3</Col>
                <Col md={4}>2 of 3</Col>
                <Col md={4}>3 of 3</Col>
            </Row>
        </Grid>

    );
  }
}
