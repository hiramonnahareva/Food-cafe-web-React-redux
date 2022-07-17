import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import {TbCurrencyDollar} from 'react-icons/tb';
import '../../Styles/FoodCard.css';
const FoodCard = ({item}) => {
    const {id,title, image1 , category, price, name, describe} = item;
    return (
        <div className='product_item'>
            <div className="product_img">
                <img src={image1} className='w-50' alt="" />
                 </div>
                <div className="product_content">
                    <h5><Link to={`/food/${id}`}>{title}</Link></h5>
                    <div>
                        <p>{describe}</p>
                        <span className="product_price"><TbCurrencyDollar className='fs-4'/>{price}</span>
                    </div>
            </div>
            
            
        </div>
    );
};

export default FoodCard;