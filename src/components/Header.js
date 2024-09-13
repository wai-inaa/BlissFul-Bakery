import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context'; 
import './Header.css';
const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { state, dispatch } = useAppContext(); 
  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    dispatch({ type: 'LOGIN', payload: name }); 
    setIsLoginOpen(false);
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); 
  };
  return (
    <header className="header">
      <div className="logo">Blissful Bites Bakery</div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-buttons">
        {state.isLoggedIn ? (
          <div className="welcome-message">
            <p className="greeting">Hello, {state.userName}!</p>
            <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <button className="btn login-btn" onClick={openLoginModal}>Login</button>
          </>
        )}
      </div>
      {isLoginOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" required />
              </div>
              <button type="submit" className="btn">Login</button>
              <button type="button" className="btn close-btn" onClick={closeLoginModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
