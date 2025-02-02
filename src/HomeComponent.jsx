import React, { useState, useEffect } from 'react';
import './App.css';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import { Typewriter } from 'react-simple-typewriter';
import PortfolioComponent from './PortfolioComponent';
import TestimonialComponent from './TestimonialComponent';
import nav_img from './assets/img/IMG_20240120_090302_654.jpg';
import bg_img from './assets/img/IMG_20240315_125838.jpg';

function HomeComponent() {
  const [activeSection, setActiveSection] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle scroll to set active section
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        id="header"
        className={`header dark-background d-flex flex-column `}
      >
        {/* <i
          className="header-toggle d-xl-none bi bi-list"
          id="header_toggle"
          onClick={toggleSidebar}
        ></i> */}

        {/* Profile Image */}
        <div className="profile-img">
          <img src={nav_img} alt="Profile" className="img-fluid rounded-circle" />
        </div>

        {/* Logo */}
        <a href="index.html" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename" style={{ textTransform: 'uppercase' }}>
            Vigneshwaran J
          </h1>
        </a>

        {/* Social Links */}
        <div className="social-links text-center">
          <a href="mailto:venerablevignesh@gmail.com" target="_blank" className="twitter">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="https://wa.me/qr/GECEIZXGJLGSG1" target="_blank" className="instagram">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://github.com/Vijayadhi" target="_blank" className="google-plus">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vignesh-waran-32176021a"
            target="_blank"
            className="linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Navigation Menu */}
        <nav id="navmenu" className={`navmenu ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li className={activeSection === 'hero' ? 'active' : ''}>
              <a href="#hero">
                <i className="bi bi-house navicon"></i> Home
              </a>
            </li>
            <li className={activeSection === 'portfolio' ? 'active' : ''}>
              <a href="#portfolio">
                <i className="bi bi-images navicon"></i> Portfolio
              </a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about">
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li className={activeSection === 'resume' ? 'active' : ''}>
              <a href="#resume">
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li className={activeSection === 'services' ? 'active' : ''}>
              <a href="#services">
                <i className="bi bi-hdd-stack navicon"></i> Services
              </a>
            </li>
            <li className={activeSection === 'testimonials' ? 'active' : ''}>
              <a href="#testimonials">
                <i className="bi bi-hdd-stack navicon"></i> Testimonials
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact">
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img src={bg_img} alt="Background" className="hero-bg" />
          <div className="container">
            <h2 style={{ textTransform: 'uppercase' }}>Vigneshwaran</h2>
            <p>
              I'm |&nbsp;
              <span style={{ color: 'white' }}>
                <Typewriter
                  words={[
                    'Fullstack Developer',
                    'Technical Service Engineer',
                    'Graphic Designer',
                    'Digital Marketer',
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioComponent />

        {/* Testimonials Section */}
        <TestimonialComponent />

        {/* Contact Section */}
        <ContactComponent />
      </main>
    </>
  );
}

export default HomeComponent;
