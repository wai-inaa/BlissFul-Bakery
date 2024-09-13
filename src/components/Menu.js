import React from 'react';
import './Menu.css'; 
import { FaBirthdayCake, FaCoffee, FaUtensils, FaStar, FaHeart } from 'react-icons/fa'; 
import DataFetcher from './DataF'; 
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
        <DataFetcher />
    </div>
  );
};
export default MenuPage;
