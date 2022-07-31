import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import img1 from '../../Assets/adult-blur-blurred-background-687824.png';
import img2 from '../../Assets/chef-cook-food-33614.png';
import img3 from '../../Assets/architecture-building-city-2047397.png';
import ico1 from '../../Assets/icons/Group 204.png';
import ico2 from '../../Assets/icons/Group 1133.png';
import ico3 from '../../Assets/icons/Group 245.png';
import { Link } from 'react-router-dom';
import { BiArrowBack, BiArrowToLeft, BiLeftArrow, BiRightArrow} from 'react-icons/bi';
import { MdArrowRight } from 'react-icons/md';
import { TbArrowNarrowRight } from 'react-icons/tb';

const Services = () => {
    const services = [
        {
            img: img1,
            Title: 'Fast Delivery',
            ico: ico1,
            des: <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nihil, modi dignissimos neque iusto molestiae.</p>
        },
        {
            img: img2,
            Title: 'Fast Delivery',
            ico: ico2,
            des: <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nihil, modi dignissimos neque iusto molestiae.</p>
        },
        {
            img: img3,
            Title: 'Fast Delivery',
            ico: ico3,
            des: <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nihil, modi dignissimos neque iusto molestiae.</p>
        }
    ]
    return (
            <Container>
        <div className='w-full'>
            <Col lg='6'>
            <h4>Why you choose us</h4>
            <p>Barton waited twenty always repair in within we do. An delighted oftening curiosity my is dashwoods at properous increasing surrounded.</p>
            </Col>
         <Row>
                
                    {
                        services.map((service, index) => (
                            <Col lg='4' key={index}>
                            <div>
                            <img className='w-100 my-4' src={service.img} alt="" />
                            <div className="d-flex align-items-center gap-2">
                            <img className='w-[6px]' src={service.ico} alt="" />
                            <h5 className=''>{service.Title}</h5>
                            </div>
                            <p className='mt-2'>{service.des}</p>
                            <Link to=''>See More <TbArrowNarrowRight/></Link>
                            </div>
                        </Col>
                        ))
                    }
                </Row>
    
        </div>
            </Container>
    );
};

export default Services;