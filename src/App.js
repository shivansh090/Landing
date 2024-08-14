import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  const circleRefs = useRef([]);

  useEffect(() => {
    const animateCircles = () => {
      circleRefs.current.forEach((circle, index) => {
        const radius = 150 + index * 70; // Adjust radius as needed
        const speed = 0.01 + index * 0.005; // Adjust speed as needed
        const angle = (Date.now() * speed + (index + 1)) % 360;
        const x = window.innerWidth / 2 + radius * Math.cos(angle * Math.PI / 180);
        const y = window.innerHeight / 2 + radius * Math.sin(angle * Math.PI / 180);
        circle.style.left = `${x - circle.offsetWidth / 2}px`;
        circle.style.top = `${y - circle.offsetHeight / 2}px`;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);
  // Select all elements with the class 'dashed'
  useEffect(() => {
    const dashedElements = document.querySelectorAll('.dashed');

    // Loop through each element and set the height based on the index
    dashedElements.forEach((element, index) => {
      const radius = 300 + index * 140;  // Calculate the height based on index
      element.style.height = `${radius}px`; // Apply the height to the element
      element.style.width = `${radius}px`;
      element.style.left = `calc(50vw - ${radius / 2}px)`;
      element.style.top = `calc(50vh - ${radius / 2}px)`;
    });
  }, []);

  //Navbar hideonScroll
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState({ top: '0' });

  const handleScroll = () => {

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Downscroll - hide the navbar
      setNavbarStyle({ top: '-70px' }); // Adjust based on your navbar height
    } else {
      // Upscroll - show the navbar
      setNavbarStyle({ top: '0' });
    }

    setLastScrollTop(scrollTop);
  };
function hambclick() {
  const sidebar= document.querySelector('.sidebar');
  sidebar.classList.toggle('active')
}
 

  return (
    <div className="App">
      <div id='navbar' className='header' style={navbarStyle}>
        <h1 className="logo">NAVBAR</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className='hambdiv' onClick={hambclick}>
          <button class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>

        </div>
      </div>
      <div className='sidebar'>
        <button style={{width:"40px",alignSelf:'end',margin:"10px"}} onClick={hambclick} >close</button>
        <nav style={{display:'flex', justifyContent:'center'}}>
          <ul style={{display:"flex", flexDirection:"column", gap: "10px", justifyContent:"center"}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>

      <main className="main">
        <div className="container">
          <div className='outline'>
            <div className='dashed'></div>
            <div className='dashed'></div>
            <div className='dashed'></div>
            <div className='dashed'></div>
            <div className='dashed'></div>
            <div className='dashed'></div>
            <div className='dashed'></div>
            <div className='dashed'></div>
            <div className='dashed'></div>
          </div>
          <div className="circles">
            {/* Add your logo icons here (JS, Svelte, React, etc.) */}
            {['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 'https://logowik.com/content/uploads/images/aws-amazon-web-services.jpg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'].map((logo, index) => (
              <div
                key={index}
                className="circle"
                ref={(el) => (circleRefs.current[index] = el)}
              >
                <img style={{ height: "50px" }} src={logo} alt={`${logo.split('.')[0]} Logo`} />
              </div>
            ))}
          </div>
          <div className='content'>
            <h2 className="title">We've really sped up our workflow</h2>
            <p className="description">
              We've just released a new update! Check out the all new dashboard view. Pages and now load faster, you can try us for free for 30 days.
              <br />
              Join 4,000+ companies already growing
            </p>
            <div className="buttons">
              <button className="learn-button">Start Learning Today</button>
              <button className="join-button">Join Now</button>
            </div>
          </div>
        </div>
      </main>

      <div className='main2'>

        <h1>Real time changes</h1>

        <p style={{ padding: "30px" }}>
          See changes as they happen. With our platform, you can track every modification in real time. No more
          confusion about the latest version of your project. Say goodbye to the chaos of version control and
          embrace the simplicity of real-time updates.
        </p>
      </div>
    </div>
  );
}

export default App;