import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context';
import { Modal, Button } from 'react-bootstrap'; 
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

  const handleLogout = () => dispatch({ type: 'LOGOUT' });
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand logo">Blissful Bites Bakery</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <div className="header-buttons">
              {state.isLoggedIn ? (
                <div className="welcome-message">
                  <p className="greeting">Hello, {state.userName}!</p>
                  <button className="btn btn-outline-secondary" onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <button className="login-btn" onClick={openLoginModal}>Login</button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Modal show={isLoginOpen} onHide={closeLoginModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" required className="form-control" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" required className="form-control" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" required className="form-control" />
            </div>
            <Button type="submit" className="login-btn">Login</Button>
            <Button className="btn-secondary" onClick={closeLoginModal}>Close</Button>
          </form>
        </Modal.Body>
      </Modal>
    </header>
  );
};
export default Header;
