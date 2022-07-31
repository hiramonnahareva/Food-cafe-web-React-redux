import React, {useEffect, useState} from 'react';
import {Row, Col, Container} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import bannerImg from '../Assets/Take Away-pana.png';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import Category from '../Components/Category/Category';
import FoodCard from '../Components/Foods/FoodCard';
import products from '../FackData/Products';
import Services from '../Components/Services/Services';
import TestimonialSlider from '../Components/Slider/TestimonialSlider';


const Home = () => {
    const [category, setCategory] = useState('all');
    const [allProducts, setAllProducts] = useState(products);
    useEffect(()=> {
        console.log(allProducts)
       if(category === 'Breakfast'){
         const filterProducts = products.filter(item => item.category === 'Breakfast');
         setAllProducts(filterProducts)
        }
        console.log(allProducts)
        if(category === 'Lunch'){
            const filterProducts = products.filter(item => item.category === 'Lunch');
            setAllProducts(filterProducts)
           }
           if(category === 'Dinner'){
            const filterProducts = products.filter(item => item.category === 'Dinner');
            setAllProducts(filterProducts)
           }
        //    else{
        //     const filterProducts = products.filter(item => item.category === 'Breakfast');
        //  setAllProducts(filterProducts)
        //    }
    }, [category])
    return (
        <div>
            <Helmet title='Home'></Helmet>
            <section className='container banner mt-0'>
                <Row>
                    <Col className='banner-right' lg='6' md='12'>
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
                    <Col lg='6' md='12'>
                    <div className="banner_img">
                        <img className='lg:w-100 w-75  ms-5' src={bannerImg} alt="" />
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
                            <button className={`button ${category === 'Breakfast' ? 'FoodBtnActive' : ''}`} onClick={()=> setCategory('Breakfast')}>Breackfast</button>
                            <button className={`button ${category === 'Lunch' ? 'FoodBtnActive' : ''}`} onClick={()=> setCategory('Lunch')}>Lunch</button>
                            <button className={`button ${category === 'Dinner' ? 'FoodBtnActive' : ''}`} onClick={()=> setCategory('Dinner')}>Denner</button>
                        </div>
                    </Col>
                        {
                            allProducts.map(item => (
                                <Col lg='4' md='6' className='Food_card'>
                               <FoodCard key={item.id} item={item}>

                        </FoodCard>
                    </Col>
                            ))
                        }

                        
                </Row>
            </Container>
            </section>
            <section>
                <Services></Services>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <img src='' alt="" className='w-100' />
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <div>
                                <h5 className='testimonial_subtitle mb-5'>Testimonial</h5>
                                <h2 className='testimonial_title'>What Our <span>Customers</span> are saying</h2>
                                <p className='testimonial_des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit libero neque ipsam ut odio beatae voluptatum possimus error sunt.</p>
                                <TestimonialSlider></TestimonialSlider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;