import React from 'react';
import './Features.css'; 
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img9 from './images/img9.jpg';
import baking from './images/baking.png';
const Features = () => {
  return (
    <div className="features-container container my-5">
      <section className="intro-section text-center mb-5">
        <h1>WELCOME TO BLISSFUL BITES BAKERY</h1>
        <p>
          We specialize in crafting delicious pastries, cakes, cookies, and cupcakes using the finest ingredients. Each treat is made with love to bring a smile to your face. Indulge in the bliss of our delightful confections and make every occasion sweeter with Blissful Bites Bakery!
        </p>
      </section>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="feature-item">
            <img src={img2} alt="Quality Baking" className="feature-image img-fluid" />
            <div className="feature-text text-center p-3">
              <img src={img4} alt="Quality Icon" className="feature-icon img-fluid" />
              <h3>Quality Baking</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-item">
            <img src={img3} alt="Best Dessert" className="feature-image img-fluid" />
            <div className="feature-text text-center p-3">
              <img src={img5} alt="Dessert Icon" className="feature-icon img-fluid" />
              <h3>Best Dessert in Town</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-item">
            <img src={img9} alt="Freshly Baked Happiness" className="feature-image img-fluid" />
            <div className="feature-text text-center p-3">
              <img src={baking} alt="Baking Icon" className="feature-icon img-fluid" />
              <h3>Freshly Baked Happiness</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
