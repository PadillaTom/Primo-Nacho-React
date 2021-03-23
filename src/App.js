import React, { useState, useRef } from 'react';
import './App.css';

// Components:
import Banner from './Components/Banner';
import AboutSection from './Components/AboutSection';
import PortfolioSection from './Components/PortfolioSection';
import Footer from './Components/Footer';

// Navbar:
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import { BrowserRouter } from 'react-router-dom';
import ContactSection from './Components/ContactSection';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 42);
function App() {
  // Open DD Menu:
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to About:
  const inicioRef = useRef(null);
  const inicioScroll = () => scrollToRef(inicioRef);
  // Scroll to About:
  const aboutRef = useRef(null);
  const aboutScroll = () => scrollToRef(aboutRef);
  //Scroll to Portfolio:
  const portfolioRef = useRef(null);
  const portfolioScroll = () => scrollToRef(portfolioRef);
  //Scroll to Contact:
  const contactRef = useRef(null);
  const contactScroll = () => scrollToRef(contactRef);
  // Main:
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='mobile-hamburg' onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <HiOutlineMenuAlt3></HiOutlineMenuAlt3>
          ) : (
            <ImCross className='hamburg-close'></ImCross>
          )}
        </div>
        <aside className={`sidebar ${isOpen && 'show-sidebar'}`}>
          <ul className='side-links'>
            <li
              className='single-link'
              onClick={() => {
                inicioScroll();
                setIsOpen(!isOpen);
              }}
            >
              Inicio
            </li>
            <li
              className='single-link'
              onClick={() => {
                aboutScroll();
                setIsOpen(!isOpen);
              }}
            >
              El Artista
            </li>
            <li
              className='single-link'
              onClick={() => {
                portfolioScroll();
                setIsOpen(!isOpen);
              }}
            >
              Portfolio
            </li>
            <li
              className='single-link'
              onClick={() => {
                contactScroll();
                setIsOpen(!isOpen);
              }}
            >
              Contacto
            </li>
          </ul>
        </aside>
        <div ref={inicioRef}>
          <Banner></Banner>
        </div>
        <div ref={aboutRef}>
          <AboutSection></AboutSection>
        </div>
        <div ref={portfolioRef}>
          <PortfolioSection></PortfolioSection>
        </div>
        <div ref={contactRef}>
          <ContactSection></ContactSection>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
