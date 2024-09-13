import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <section className="main-section">
      <div className="hero">
        <h1>Welcome to the Blissful Bites Bakery</h1>
        <p>Where every bite is a delightful experience. Freshly baked goods crafted with passion.</p>
        <Link to="/menu">
          <button className="btn hero-btn">Explore Menu</button>
        </Link>
      </div>
    </section>
  );
};
export default Main;
