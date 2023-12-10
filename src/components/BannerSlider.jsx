
import React, { useState, useEffect } from 'react';


const BannerSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds (5000ms)

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
        
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full focus:outline-none 
              ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}
              ${index !== 0 ? 'ml-2' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
