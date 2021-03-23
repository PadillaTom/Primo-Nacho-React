import React from 'react';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className='section banner-sect'>
      <div className='banner-info'>
        <h2 className='banner-text'>Primo de Nacho</h2>
        <div className='mobile-icons'>
          <FaFacebook className='mobile-icon'></FaFacebook>
          <FaInstagram className='mobile-icon'></FaInstagram>
          <FaTwitterSquare className='mobile-icon'></FaTwitterSquare>
        </div>
      </div>
    </section>
  );
};

export default Banner;
