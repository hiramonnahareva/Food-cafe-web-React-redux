// import React from 'react';
// all images
import Breakfast_img_1 from "../Assets/breakfast/breakfast4.png";
import Breakfast_img_2 from "../Assets/breakfast/breakfast2.png";
import Breakfast_img_3 from "../Assets/breakfast/breakfast3.png";
import Breakfast_img_4 from "../Assets/breakfast/breakfast1.png";
import Breakfast_img_5 from "../Assets/breakfast/breakfast5.png";
import Breakfast_img_6 from "../Assets/breakfast/breakfast6.png";

import Lunch_img_1 from "../Assets/lunch/lunch1.png";
import Lunch_img_2 from "../Assets/lunch/lunch2.png";
import Lunch_img_3 from "../Assets/lunch/lunch3.png";
import Lunch_img_4 from "../Assets/lunch/lunch4.png";
import Lunch_img_5 from "../Assets/lunch/lunch5.png";
import Lunch_img_6 from "../Assets/lunch/lunch6.png";

import Dinner_img_1 from "../Assets/dinner/dinner1.png";
import Dinner_img_2 from "../Assets/dinner/dinner2.png";
import Dinner_img_3 from "../Assets/dinner/dinner3.png";
import Dinner_img_4 from "../Assets/dinner/dinner4.png";
import Dinner_img_5 from "../Assets/dinner/dinner5.png";
import Dinner_img_6 from "../Assets/dinner/dinner6.png";

const foods = [
    {
        id:'1',
        title: 'Gangle and Cream Cheese',
        price: 70.00,
        image1: Breakfast_img_1, 
        image2: Breakfast_img_2, 
        image3: Breakfast_img_3, 
        category: 'breakfast',
        describe: 'How we dream about our future',
    },
    {
        id:'2',
        title: 'Fried Chicken Bento',
        price: 75.00,
        image1: Breakfast_img_2, 
        image3: Breakfast_img_3, 
        image4: Breakfast_img_4, 
        category: 'breakfast',
        describe: 'How we dream about our future',
    },
    {
        id:'3',
        title: 'Tarragon-Rubbed-salmon',
        price: 120.00,
        image1: Breakfast_img_3, 
        image4: Breakfast_img_4, 
        image5: Breakfast_img_5,  
        category: 'breakfast',
        describe: 'How we dream about our future',
    },
    {
        id:'4',
        title: 'Gangle and Cream Cheese',
        price: 90.00,
        image1: Breakfast_img_4, 
        image2: Breakfast_img_5, 
        image3: Breakfast_img_6, 
        category: 'breakfast',
        describe: 'How we dream about our future',
    },
    {
        id:'5',
        title: 'Fried Chicken Bento',
        price: 88.00,
        image1: Breakfast_img_5, 
        image3: Breakfast_img_6, 
        image4: Breakfast_img_1, 
        category: 'breakfast',
        describe: 'How we dream about our future',
    },
    {
        id:'6',
        title: 'Tarragon-Rubbed-salmon',
        price: 78.00,
        image1: Breakfast_img_6, 
        image4: Breakfast_img_1, 
        image5: Breakfast_img_2,  
        category: 'breakfast',
        describe: 'How we dream about our future',
    },
    {
        id:'7',
        title: 'Indian Lunch',
        price: 45.00,
        image1: Lunch_img_4, 
        image5: Lunch_img_5, 
        image6: Lunch_img_6, 
        category: 'Lunch',
        describe: 'How we dream about our future',
    },
    {
        id:'8',
        title: 'Beef Steak',
        price: 92.00,
        image1: Lunch_img_5, 
        image5: Lunch_img_6, 
        image6: Lunch_img_1, 
        category: 'Lunch',
        describe: 'How we dream about our future',
    },
    {
        id:'9',
        title: 'Indian Lunch',
        price: 87.00,
        image1: Lunch_img_4, 
        image5: Lunch_img_5, 
        image6: Lunch_img_6, 
        category: 'Lunch',
        describe: 'How we dream about our future',
    },
    {
        id:'10',
        title: 'Beef Steak',
        price: 56.00,
        image1: Lunch_img_5, 
        image5: Lunch_img_6, 
        image6: Lunch_img_1, 
        category: 'Lunch',
        describe: 'How we dream about our future',
    },
    {
        id:'11',
        title: 'Honey-Soy-Glazed Salmon with Peppers',
        price: 90.00,
        image1: Lunch_img_6, 
        image2: Lunch_img_1, 
        image3: Lunch_img_2, 
        category: 'Lunch',
        describe: 'How we dream about our future',
    },
    {
        id:'12',
        title: 'Healthy Meal Plan',
        price: 98.00,
        image1: Lunch_img_1, 
        image2: Lunch_img_2, 
        image3: Lunch_img_3, 
        image4: Lunch_img_4, 
        image5: Lunch_img_5, 
        image6: Lunch_img_6, 
        category: 'Lunch',
        describe: 'How we dream about our future',
    },
    {
        id:'13',
        title: 'Gangle and Cream Cheese',
        price: 68.00,
        image1: Dinner_img_1, 
        image2: Dinner_img_2, 
        image3: Dinner_img_3, 
        category: 'Dinner',
        describe: 'How we dream about our future',
    },
    {
        id:'14',
        title: 'Fried Chicken Bento',
        price: 49.00,
        image1: Dinner_img_2, 
        image3: Dinner_img_3, 
        image4: Dinner_img_4, 
        category: 'Dinner',
        describe: 'How we dream about our future',
    },
    {
        id:'15',
        title: 'Tarragon-Rubbed-salmon',
        price: 97.00,
        image1: Dinner_img_3, 
        image4: Dinner_img_4, 
        image5: Dinner_img_5,  
        category: 'Dinner',
        describe: 'How we dream about our future',
    },
    {
        id:'16',
        title: 'Gangle and Cream Cheese',
        price: 45.00,
        image1: Dinner_img_4, 
        image2: Dinner_img_5, 
        image3: Dinner_img_6, 
        category: 'Dinner',
        describe: 'How we dream about our future',
    },
    {
        id:'17',
        title: 'Fried Chicken Bento',
        price: 96.00,
        image1: Dinner_img_5, 
        image3: Dinner_img_6, 
        image4: Dinner_img_1, 
        category: 'Dinner',
        describe: 'How we dream about our future',
    },
    {
        id:'18',
        title: 'Tarragon-Rubbed-salmon',
        price: 64.00,
        image1: Dinner_img_6, 
        image4: Dinner_img_1, 
        image5: Dinner_img_2,  
        category: 'Dinner',
        describe: 'How we dream about our future',
    },
]

// const Products = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

export default foods;