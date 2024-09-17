import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
const Main = () => {
  return (
    <section className="main-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="hero">
        <h1 className="display-4">Welcome to the Blissful Bites Bakery</h1>
        <p className="lead">Where every bite is a delightful experience. Freshly baked goods crafted with passion.</p>
        <Link to="/menu">
          <button className="btn btn-light btn-lg hero-btn">Explore Menu</button>
        </Link>
      </div>
    </section>
  );
};
export default Main;
