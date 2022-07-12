import React from 'react';
import image from '../../Assets/Take Away-pana.png';
import {Container, Row, Col} from 'reactstrap'

const Banner = () => {
    return (
        <div>
          <Container>
          <Row>
            <Col className="lg-6 d-flex align-items-center me-4">
             <div>
             <h2 className=''>Take And Eat</h2>
             <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nisi odit delectus aspernatur quos vel aut ullam enim quod voluptatem. Fugit et ad velit, explicabo cum deserunt nobis totam provident.</p>
             <button className='btn btn-danger'>Bye Now</button>
             </div>
            </Col>
            <Col className="lg-6">
            <img src={image} alt="" width='80%' />
            </Col>
           </Row>
          </Container>
        </div>
    );
};

export default Banner;