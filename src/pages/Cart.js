import React from 'react'
import { Row, Col, Table, Container } from 'reactstrap'
import CommonSection from '../Components/CommonSection/CommonSection'
import Helmet from '../Components/Helmet/Helmet';
import image from '../Assets/CartBanner.png'

function Cart() {
  return (
    <div>
      
      <img src={image} width='100%' alt="" />
      <Helmet title='cart'/>
      <CommonSection title='your Cart'/>
      <section className='mt-5'>
       <Container>
       <Row>
          <Col lg='12'>
            <Table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
       </Container>
      </section>
    </div>

  );
};
// Const Tr = props => {
//       return <tr>
//         <td>Image 01</td>
//         <td>B</td>
//         <td></td>
//         <td></td>
//         <td></td>
//       </tr>
// }

export default Cart