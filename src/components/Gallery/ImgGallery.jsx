import React from 'react';
import './ImgGallery.css';

function Gallery() {
  const imageFolder = '/images'; 
  const images = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg'
    
  ];

  return (
    <div className="gallery-container">
      <h1>GALERIA</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img
              src={`${imageFolder}/${image}`}
              alt={`Image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;