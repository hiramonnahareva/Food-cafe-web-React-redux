import React from 'react';
import Slider from 'react-slick';

import './TestimonialSlider.css';
import ava01 from '../../Assets/Testimonial/testimonial-1.webp';
import ava02 from '../../Assets/Testimonial/testimonial-2.webp';
import ava03 from '../../Assets/Testimonial/testimonial-3.webp';

const TestimonialSlider = () => {
    const testimonials = [
        {
            img: <img src={ava01} alt=''></img>,
            name: 'Jhon Doe',
            describe: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex voluptas doloremque itaque porro laborum sed deleniti corrupti eius necessitatibus. Quaerat tempora voluptatem aspernatur cum sequi beatae iure debitis tempore."'
        },
        {
            img: <img src={ava02} alt=''></img>,
            name: 'Mitchell Marsh',
            describe: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex voluptas doloremque itaque porro laborum sed deleniti corrupti eius necessitatibus. Quaerat tempora voluptatem aspernatur cum sequi beatae iure debitis tempore."'
        },
        {
            img: <img src={ava03} alt=''></img>,
            name: 'Jhon Doe',
            describe: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex voluptas doloremque itaque porro laborum sed deleniti corrupti eius necessitatibus. Quaerat tempora voluptatem aspernatur cum sequi beatae iure debitis tempore."'
        }
    ]
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
    
    return (
        <div>
        <Slider {...settings}>
           {
            testimonials.map(testimonial => <div>
               
                 <p className='review_text'>{testimonial.describe}</p>
                 <div className="d-flex gap-3 align-items-center">
                 <div className='slider_content'>
                 {testimonial.img}
                 </div>
                 <h6 className='my-2'>{testimonial.name}</h6>
                 </div>
                </div>)
           }
        </Slider>
      </div>
    );
};

export default TestimonialSlider;