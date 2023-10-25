import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './featured.css'; 
import kiln from '../../images/kiln.jpg';
import wheel2 from '../../images/wheel2.PNG';
import worktable from '../../images/workstation.PNG';
import sell from '../../images/sell.jpg';

const Featured = () => {
    const settings = {
        dots: true,
        accessibility:true,
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true, 
        autoplaySpeed: 2000, 
        arrows: true, 
        draggable: false, 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
      };
    
  return (
  <>
   <div className="carousel-container featured">

      <Slider {...settings}>
        <div className="carousel-item">
          <img src={kiln} alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={sell} alt="Slide 3" />
        </div>
        <div className="carousel-item" >
          <img src={wheel2} alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={worktable} alt="Slide 4" />
        </div>
      </Slider>

    </div>
    </>
  )
}

export default Featured