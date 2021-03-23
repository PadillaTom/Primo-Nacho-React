import React from 'react';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='section footer-sect'>
      <div className='section-center'>
        <div className='footer-info-container'>
          <div className='footer-text'>
            <p>Primo de Nacho</p>
          </div>
          <div className='footer-contact'>
            <div className='footer-contact-text'>
              <p>email@email.com</p>
              <p>+00 00 000 00 00</p>
            </div>
            <div className='footer-contact-icons'>
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaTwitterSquare></FaTwitterSquare>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
