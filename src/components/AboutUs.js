import React from 'react';
import './AboutUs.css'; 
import bakeryImage from './images/bakery.jpg'; 
import growthImage from './images/growth.jpg';
import teamImage from './images/team.jpg';
import mission from './images/mission.jpg';
const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-hero">
        <h1>About Blissful Bite Bakery</h1>
        <p>Crafting Joy in Every Bite!</p>
      </section>

      <section className="about-content">
        <div className="content-item">
          <img src={teamImage} alt="Our Team" className="content-image" />
          <div className="content-text">
            <h2>Our Team</h2>
            <p>Meet the passionate bakers who bring their love for baking to each and every creation. Our team is dedicated to delivering the highest quality baked goods with a touch of love.</p>
          </div>
        </div>

        <div className="content-item">
          <img src={bakeryImage} alt="Our Bakery" className="content-image" />
          <div className="content-text">
            <h2>Our Bakery</h2>
            <p>Step into our bakery and experience a warm and welcoming atmosphere. From freshly baked pastries to custom cakes, our bakery is a haven for all your sweet cravings.</p>
          </div>
        </div>

        <div className="content-item">
          <img src={mission} alt="Our Mission" className="content-image" />
          <div className="content-text">
            <h2>Our Mission</h2>
            <p>At Blissful Bite, our mission is to spread joy through our delicious baked goods. We are committed to using the finest ingredients and maintaining the highest standards to bring you an unforgettable experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
