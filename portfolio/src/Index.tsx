// src/components/Index.js
import React from 'react';
import Navbar from './Navbar';
import './Index.css';

const Index = () => {
  return (
    <div className="index-page">
      <Navbar />
      <section id="home" className="home-section">
        <h1>Welcome to My Portfolio</h1>
        <p>I am Balu, currently pursuing my 2nd year B.Tech at Karunya Institute of Technology and Sciences.
           As a passionate developer</p>
      </section>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p> I have developed the frontend using Flutter and designed the interfaces with Figma.
           Additionally, I have created an e-commerce website using HTML, CSS, and Bootstrap, 
          showcasing my ability to build functional and visually appealing web applications.</p>
      </section>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>E-commerce Website</h3>
            <p>E-commerce Website Development: Built a shopping website using HTML, CSS, and Bootstrap to facilitate online purchasing.
            Responsive Design: Ensured the website is fully responsive and accessible on various devices using Bootstrap's grid system.</p>
          </div>
          <div className="project-item">
            <h3>Agrogenesis</h3>
            <p>Developed an agri-based application to support farmers by designing the UI in Figma and converting it to Flutter code.
              Transformed Figma designs into functional Flutter applications, ensuring a seamless user experience.
              Demonstrated expertise in both UI/UX design and mobile app development with a focus on agricultural solutions.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
          <a href="#">bbalu0420@gmail.com</a><br></br>
          <a href="+91 7708210139" class="phone-link">+91 7708210139</a><br></br>
          <a href="https://www.linkedin.com/in/baluk88?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
      </section>
    </div>
  );
};

export default Index;
