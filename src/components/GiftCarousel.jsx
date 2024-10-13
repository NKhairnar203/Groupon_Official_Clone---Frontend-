// Import necessary packages and styles
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GiftCarousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Enables infinite loop
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Automatically scrolls to the next slide
    autoplaySpeed: 3000, // Delay between auto transitions
    arrows: true, // Shows next and previous arrows
  };

  return (
    <div className="max-w-full mx-auto my-8 px-5 bg-slate-400">
    <h2 className="text-3xl font-bold mb-4">Gift Ideas</h2>
      <Slider className="" {...settings}>
        <div>
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/800x400"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/800x400"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/800x400"
            alt="Slide 3"
          />
        </div>
        <div>
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/800x400"
            alt="Slide 4"
          />
        </div>
      </Slider>
    </div>
  );
};

export default GiftCarousel;
