import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import { AppProvider } from './components/Context'; 
const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<><Main /><Features /></>} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProvider>
  );
};
export default App;
