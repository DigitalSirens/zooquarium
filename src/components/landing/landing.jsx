import React from 'react';
import Image from 'react-bootstrap/Image';
import snakeImg from '../../../src/assets/yellow-snake.jpg';
import './landing.css';

const Landing = () => {
  return (
    <div>
      <h1 className='welcome-header'>Welcome!</h1>
      <button className='login-btn'>Login</button>
      <div className='img-container'>
        <Image src={snakeImg} className='custom-img' fluid />
      </div>
    </div>
  );
};

export default Landing;
