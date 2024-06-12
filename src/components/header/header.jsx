import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-left'>
          <h1 className='header-title'>Zooquarium</h1>
        </div>
        <div className='header-right'>
          <nav className='header-nav'>
            <ul className='header-nav-list'>
              <li className='header-nav-item'>
                <a href='/' className='header-nav-link'>
                  Home
                </a>
              </li>
              <li className='header-nav-item'>
                <a href='about' className='header-nav-link'>
                  About
                </a>
              </li>
              <li className='header-nav-item'>
                <a href='contact' className='header-nav-link'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className='login-button'>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
