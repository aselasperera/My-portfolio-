import React from 'react';
import '../Styles/Home.css';
import profilePic from '../Assets/profile-pic.png'; // Import the profile picture
import linkedinIcon from '../Assets/linkedin.png'; // Import the LinkedIn icon
import githubIcon from '../Assets/github.png'; // Import the GitHub icon
import emailIcon from '../Assets/email.png'; // Import the Email icon

function Portfolio() {
  const toggleMenu = () => {
    // Define your toggleMenu function logic here
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Asela Perera</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profilePic} alt="Profile" /> {/* Use the profile picture */}
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Asela Perera</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open('./assets/resume-example.pdf')}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" onClick={() => window.open('https://www.linkedin.com/in/asela-perera-580298252/')} />
            <img src={githubIcon} alt="GitHub" className="icon" onClick={() => window.open('https://github.com/aselasperera')} />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="text-container">
          <p>
            <center> Hello! I'm Asela, a passionate Computer Science undergraduate at the University of Westminster. 
            a Computer Science student at the University of Westminster. Passionate about technology and innovation, I thrive on bringing ideas to life through code. With a knack for frontend development, I specialize in crafting captivating user experiences that leave a lasting impression. My journey in the tech industry has been an exhilarating ride, filled with exciting challenges and rewarding accomplishments.

<br></br> <br></br>Driven by curiosity and fueled by creativity, I'm constantly exploring new technologies and pushing the boundaries of what's possible. From building sleek websites to developing robust web applications, I've had the opportunity to work on a diverse range of projects that have helped me grow both personally and professionally.

With each project, I strive to deliver excellence, paying meticulous attention to detail and ensuring that every line of code serves a purpose. I believe that technology has the power to drive positive change, and I'm committed to leveraging my skills to make a meaningful impact in the world.

<br></br> <br></br> Let's collaborate and build something extraordinary together!</center>
          </p>
        </div>
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h3>Experience</h3>
                <p>04 Months <br />Technical Support Executive <br /> Rapidventure Pvt Ltd</p>
              </div>
              <div className="details-container">
                <h3>Education</h3>
                <p>Computer Science undergraduate<br />University of Westminster</p>
              </div>
              <div className="details-container">
                <h3>Education</h3>
                <p>Student<br />Wadduwa Central National Collage</p>
              </div>
              <div className="details-container">
                <h3>Volunteering</h3>
                <p>IEEE CS Public Visibility Team<br />Informatics Institute of Technology </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <div className="section__pic-container">
              <img src={emailIcon} alt="Email icon" className="icon contact-icon" />
            </div>
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div> <br></br>
          <div className="contact-info-container">
            <div className="section__pic-container">
              <img src={linkedinIcon} alt="LinkedIn" className="icon contact-icon" />
            </div>
            <p><a href="https://www.linkedin.com/in/asela-perera-580298252/">LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav></nav>

        <p>Copyright &#169; 2024 AselaSperera. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Portfolio;
