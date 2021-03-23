import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className='section about-sect'>
      <div className='section-title'>
        <h2>Acerca de mi</h2>
      </div>
      <div className='section-center'>
        <div className='about-info'>
          <h4 className='about-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            officia doloremque deserunt perferendis repellat iste magnam hic
            fugit iure quos assumenda repellendus, saepe, ipsum odio ea quas aut
            obcaecati.
          </h4>
          <div className='about-cta'>
            <h4 className='about-email'> email@email.com</h4>
            <a href='#' className='about-icon'>
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
