import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = '#';
  };

  return (
    <header>
      <div className="header-container">
        <h1 className="logo" onClick={handleLogoClick}>Kaio Torres</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;