import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import {TbCurrencyDollar} from 'react-icons/tb';
import '../../Styles/FoodCard.css';
import { useDispatch } from 'react-redux/es/exports';
import { cartActions } from '../../Store/Shopping-cart/CartSlice';
const FoodCard = ({item}) => {
    const {id,title, image1 , category, price, name, describe} = item;
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image1,
            price,

        }))
    }
    return (
        <div className='product_item'>
            <div className="product_img">
                <img src={image1} className='w-50' alt="" />
                 </div>
                <div className="product_content">
                    <h5><Link to={`/food/${id}`}>{title}</Link></h5>
                    <div>
                        <p className='Product_describe'>{describe}</p>
                        <span className="product_price"><TbCurrencyDollar className='fs-4'/>{price}</span>
                        <button className='add_to_cart_btn' onClick={addToCart}>Add to Cart</button>
                    </div>
            </div>
            
            
        </div>
    );
};

export default FoodCard;