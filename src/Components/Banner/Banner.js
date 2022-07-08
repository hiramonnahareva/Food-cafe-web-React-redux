import React from 'react';
import image from '../../Assets/Take Away-pana.png';
import {Container, Row, Col} from 'reactstrap'

const Banner = () => {
    return (
        <div>
          <Container>
          <Row>
            <Col className="lg-6"></Col>
            <Col className="lg-6">
            <img src={image} alt="" width='80%' />
            </Col>
           </Row>
          </Container>
        </div>
    );
};

export default Banner;