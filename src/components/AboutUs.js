import React from 'react';
import './AboutUs.css'; 
import bakeryImage from './images/bakery.jpg'; 
import teamImage from './images/team.jpg';
import mission from './images/mission.jpg';
const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-hero text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">About Blissful Bite Bakery</h1>
          <p className="lead">Crafting Joy in Every Bite!</p>
        </div>
      </section>
      <section className="about-content container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="content-item bg-white p-4 rounded shadow">
              <img src={teamImage} alt="Our Team" className="content-image img-fluid mb-3" />
              <div className="content-text">
                <h2 className="h4">Our Team</h2>
                <p>Meet the passionate bakers who bring their love for baking to each and every creation. Our team is dedicated to delivering the highest quality baked goods with a touch of love.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="content-item bg-white p-4 rounded shadow">
              <img src={bakeryImage} alt="Our Bakery" className="content-image img-fluid mb-3" />
              <div className="content-text">
                <h2 className="h4">Our Bakery</h2>
                <p>Step into our bakery and experience a warm and welcoming atmosphere. From freshly baked pastries to custom cakes, our bakery is a haven for all your sweet cravings.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="content-item bg-white p-4 rounded shadow">
              <img src={mission} alt="Our Mission" className="content-image img-fluid mb-3" />
              <div className="content-text">
                <h2 className="h4">Our Mission</h2>
                <p>At Blissful Bite, our mission is to spread joy through our delicious baked goods. We are committed to using the finest ingredients and maintaining the highest standards to bring you an unforgettable experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
