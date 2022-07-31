import { Container, Row, Col } from "reactstrap";
import image1 from '../../Assets/icons/Group 287.png';
import image2 from '../../Assets/icons/Group 743.png';
import image3 from '../../Assets/icons/Group 747.png';
import image4 from '../../Assets/icons/Group 765.png';
// import {MdOutlineBreakfastDining, MdLunchDining} from 'react-icons/md'
import { MdOutlineBreakfastDining, MdLunchDining } from 'react-icons/md';
import { GiHotMeal } from 'react-icons/gi';
import '../../Styles/Category.css';

import React from 'react';

const Category = () => {
    const category = [
        {
            display: 'Bread',
            // icon: <MdOutlineBreakfastDining />
           img: <img width='65px' src={image1} alt="" />

        },
        {
            display: 'Barger',
            // icon: <MdLunchDining />
            img: <img width='55px' src={image2} alt="" />

        },
        {
            display: 'Pizza',
            // icon: <GiHotMeal />
            img: <img width='50px' src={image3} alt="" />

        },
        {
            display: 'Ice-Crim',
            // icon: <MdOutlineBreakfastDining />
            img: <img width='60px' src={image4} alt="" />

        },
    ]
    return (
        <div>
            <Container>
                <Row>

                    {
                        category.map(item => <Col className="category" lg={3}>
                            <div className="category_containt">
                                <div className="category_Icon d-flex justify-content-center align-items-center">
                                    {item.img}
                                </div>
                                <h6 className="category_display">{item.display}</h6>
                            </div>
                        </Col>)
                    }
                    {/* <img width={50} src={image1} alt="" />
                        <span>Barger</span>
                        </Col>
                        <Col className="col-3">
                        <img width={50} src={image1} alt="" />
                        <span>Barger</span>
                        </Col>
                        <Col className="col-3">
                        <img width={50} src={image1} alt="" />
                        <span>Barger</span>
                        </Col>
                        <Col className="col-3">
                        <img width={50} src={image1} alt="" />
                        <span>Barger</span> */}

                </Row>
            </Container>
        </div>
    );
};

export default Category;