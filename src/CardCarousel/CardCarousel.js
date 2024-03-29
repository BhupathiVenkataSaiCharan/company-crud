import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import "./CardCarousel.css";


const CardCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
        <div className='text-lg-center'>
            <h1>Card Carousel</h1>
            <div>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className="carding">Item 1</div>
                <div className="carding">Item 2</div>
                <div className="carding">Item 3</div>
                <div className="carding">Item 4</div>
                <div className="carding">Item 5</div>
                <div className="carding">Item 6</div>
            </Carousel> 
            </div>
        </div>
    </>
  )
}

export default CardCarousel;