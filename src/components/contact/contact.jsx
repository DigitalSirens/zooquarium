import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import snakeImg from '../../../src/assets/yellow-snake.jpg';

import './contact.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message has been sent successfully.');
        },
        (error) => {
          console.log(error.text);
          alert(
            'There was an error sending your message. Please try again later.'
          );
        }
      );
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className='container'>
      <div className='contactForm'>
        <h1>Contact Us</h1>
        <h2>Questions? Go ahead and send us a message!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formState.name}
            onChange={handleChange}
            required
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formState.email}
            onChange={handleChange}
            required
          />

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className='contactBtn' type='submit'>
            Send
          </button>
        </form>
      </div>
      <div className='image-container'>
        <img src={snakeImg} alt='yellow snake in tree' />
      </div>
    </div>
  );
};

export default ContactForm;
