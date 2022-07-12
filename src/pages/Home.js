import React from 'react';
import {Row, Col} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import bannerImg from '../Assets/Take Away-pana.png';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Helmet title='Home'></Helmet>
            <section className='container mt-0'>
                <Row>
                    <Col className='banner-right' lg='6' md='6'>
                        <div className="banner_content">
                            <h5 className='mb-3'>Easy Way to make an order</h5>
                            <h1 className='mb-4 banner_title'>If You<span> HUNGRY? </span> Just Call us. <br /> We are<span> always ready</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas voluptate quisquam nostrum nisi corrupti porro in eligendi, ipsa ipsum!</p>
                            <div className="banner_btns d-flex align-items-center gap-5 mt-5">
                            <button className='order_btn d-flex align-items-center justifu-content-between'>Order now</button>
                            <button className='all_foods_btn'><Link to='/allfoods'>See all food</Link></button>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                    <div className="banner_img">
                        <img className='w-100 ms-5' src={bannerImg} alt="" />
                    </div>
                    </Col>
                    <Col lg='6' md='6'>
                    </Col>
                    <Col lg='6' md='6'>
                    </Col>
                </Row>
            </section>
        </div>
    );
};

export default Home;