import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import bannerImg from '../Assets/Take Away-pana.png';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import Category from '../Components/Category/Category';
import FoodCard from '../Components/Foods/FoodCard';
import products from '../FackData/Products';


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
                </Row>
            </section>
            <Category></Category>
            <section>
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2>Popular Foods</h2>
                    </Col>
                    <Col lg='12'>
                        <div className="food_Category">
                            {/* <button className='all_btn button'>All</button> */}
                            <button className='button'>Breackfast</button>
                            <button className='button'>Lunch</button>
                            <button className='button'>Denner</button>
                        </div>
                    </Col>
                        {
                            products.map(item => (
                                <Col lg='4' md='4' className='Food_card'>
                               <FoodCard key={item.id} item={item}>

                        </FoodCard>
                    </Col>
                            ))
                        }

                        
                </Row>
            </Container>
            </section>
        </div>
    );
};

export default Home;