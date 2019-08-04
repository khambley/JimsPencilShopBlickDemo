import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid>
        <Row>
          //<Col sm={3}>
            <NavMenu />
          //</Col>
          //<Col sm={9}>
            
          //</Col>
            </Row>
            <Row>
                {this.props.children}
            </Row>
      </Grid>
    );
  }
}
