import React from 'react';
import './Menu.css'; // Ensure this path is correct
import { FaBirthdayCake, FaCoffee, FaUtensils, FaStar, FaHeart } from 'react-icons/fa'; // Ensure icons are installed
import DataFetcher from './DataF'; // Import DataFetcher

const MenuPage = () => {
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <h1>Our Menu</h1>
        <div className="icon-container">
          <FaBirthdayCake className="icon" title="Cakes" />
          <FaCoffee className="icon" title="Coffee" />
          <FaUtensils className="icon" title="Utensils" />
          <FaStar className="icon" title="Quality" />
          <FaHeart className="icon" title="Love" />
        </div>
      </section>

      <section className="menu-items">
        {/* Use DataFetcher to get and display menu items */}
        <DataFetcher />
      </section>
    </div>
  );
};

export default MenuPage;
