import { Container, Row, Col } from "reactstrap";
// import image1 from '../../Assets/burger-icon-vector-illustration-drawing_csp46245697.png'
// import {MdOutlineBreakfastDining, MdLunchDining} from 'react-icons/md'
import { MdOutlineBreakfastDining, MdLunchDining } from 'react-icons/md';
import { GiHotMeal } from 'react-icons/gi';
import '../../Styles/Category.css';

import React from 'react';

const Category = () => {
    const category = [
        {
            display: 'bread',
            icon: <MdOutlineBreakfastDining />

        },
        {
            display: 'Barger',
            icon: <MdLunchDining />

        },
        {
            display: 'Dinner',
            icon: <GiHotMeal />

        },
        {
            display: 'Breakfast',
            icon: <MdOutlineBreakfastDining />

        },
    ]
    return (
        <div>
            <Container>
                <Row>

                    {
                        category.map(item => <Col className="category" lg={3}>
                            <div className="category_containt">
                                <div className="category_Icon">
                                    {item.icon}
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