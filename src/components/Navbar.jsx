import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">TWHCV</a>
        </div>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/988" className="nav-link">Get Help</a>
          <a href="/qpr" className="nav-link">QPR Training</a>
          <a href="/community" className="nav-link">Community</a>
          <a href="/donate" className="nav-link">Donate</a>
        </div>

        <div className="navbar-actions">
          <a href="/donate" className="cart-button" aria-label="Donate">
            <ShoppingCart size={20} />
          </a>
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;