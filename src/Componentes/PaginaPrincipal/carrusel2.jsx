import React, { useState, useEffect } from 'react';
import './principal.css'


const Carrusel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'src/assets/promo1.webp',
    'src/assets/promo2.webp',
    'src/assets/promo3.webp',
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="carousel">
       
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <button className="prev" onClick={prevImage}>❮</button>
      <button className="next" onClick={nextImage}>❯</button>
    </div>
  );
};

export default  Carrusel2;