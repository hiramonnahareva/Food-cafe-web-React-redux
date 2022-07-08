import React from 'react';
import image from '../../Assets/CartBanner.png'

const Helmet = (props) => {
    document.title = 'Food ordering app -' + props.title
    return (
        <div className='w-100'>{props.children} </div>
    );
};

export default Helmet;