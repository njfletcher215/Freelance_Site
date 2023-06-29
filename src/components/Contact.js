import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../App';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: BACKEND_URL + "email/send",
      data:  {
        name: name,
        email: email,
        message: message
      }
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
      } else if(response.data.status === 'fail') {
        alert("Message failed to send.");
      }
    }).catch((error) => {
      alert(error);
    })

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact'>
      <h3>CONTACT ME</h3>
      <div className='contact-options'>
        <div className='contact-wrapper'>
          <p className='contact-blurb'>Reach out to me directly:</p>
          <div className='contact-links'>
            <a className='contact-link styled-button' href='tel:+4022168557'>402-216-8557</a>
            <a className='contact-link styled-button' href='mailto:nathanfletcher@nathanfletcher.dev'>nathanfletcher@nathanfletcher.dev</a>
            <a className='contact-link styled-button' href='mailto:njfletcher215@gmail.com'>njfletcher215@gmail.com</a>
            <a className='contact-link styled-button' href='https://www.linkedin.com/nathanjfletcher'>Linkedin</a>
            <a className='contact-link styled-button' href='https://www.github.com/njfletcher215'>GitHub</a>
          </div>
        </div>
        <div className='contact-wrapper'>
          <p className='contact-blurb'>Or, use the form below to get in touch with me:</p>
          <form className='contact-form' onSubmit={handleSubmit}>
            <label htmlFor="name">NAME:</label>
            <input className='text-input' type="text" id="name" value={name} onChange={handleNameChange} required />
  
            <label htmlFor="email">EMAIL:</label>
            <input className='text-input' type="email" id="email" value={email} onChange={handleEmailChange} required />
  
            <label htmlFor="message">MESSAGE:</label>
            <textarea className='text-input' id="message" rows={3} value={message} onChange={handleMessageChange} required />
  
            <button className="contact-link styled-button" type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};
  