import React, { useRef, useEffect, useState } from 'react';
import './About.css'
import datascience from './accets/datascience (1).png'
import jsimage from './accets/jssvg.svg'
import reactimage from './accets/reacticon.svg'
import nodeimage from './accets/nodeicon.svg'
import mongoimage from './accets/mongoicon.svg'
import arrow from './accets/arrow.svg'
import mern from './accets/MERN-logo.png'
import myphoto from './accets/myphot-bgremove.png'
import Loader from '../Loader/Loader';
import Scrollanimation from '../Scrollanimation/Scrollanimation';
import Cursertext from '../Cursertext/Cursertext'
import Socialmedia from '../Socialmedia/Socialmedia';

function About() {
  // scroll animation 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > screenHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // loader 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div>
      {loading ? <Loader name="Welcome to my portfolio" /> :
        <div className='aboutpagediv-class' id='about' style={{ height: screenHeight }}>

          <div className='firstdiv-class first' style={{ width: screenWidth / 2.5, height: screenHeight }}>
            <div className='htmlcssdiv-class skillicon'>
              <Scrollanimation src={mern} alt="mern" />
              <Scrollanimation src={datascience} alt="datascience" />
            </div>

            <div className='jsnodediv-class skillicon'>
              <Scrollanimation src={nodeimage} alt="node" />
              <Scrollanimation src={jsimage} alt="js" />
            </div>

            <div className='reactmongodiv-class skillicon'>
              <Scrollanimation src={reactimage} alt="react" />
              <Scrollanimation src={mongoimage} alt="mongodb" />
            </div>
          </div>

          <div className='seconddiv-class' style={{ height: screenHeight / 2 }}>
            <img className='myphotobig' src={myphoto} alt='myphoto' />
          </div>

          <div className='thirddiv-class' style={{ width: screenWidth / 2.5 }}>
            <div className='arrowdiv-class' style={{ height: screenHeight / 4 }}>
              <img className='messageshowingarrow-class' src={arrow} alt="icon" />
            </div>
            <div className='text2inthirddiv-class' style={{ height: screenHeight / 4 }}>
              <div class="text">
                <div class="wrapper">
                  <div id="L" class="letter">I</div>
                </div>
                <div class="wrapper">
                  <div id="I" class="letter">Am</div>
                </div>
                <div class="wrapper">
                  <div id="G" class="letter">Gautam</div>
                </div>
              </div>
              <Cursertext />
            </div>
            <Socialmedia />
          </div>

          <div className='firstdiv-class second' style={{ width: screenWidth / 2.5, height: screenHeight }}>
            <div className='htmlcssdiv-class skillicon'>
              <Scrollanimation src={mern} alt="mern" />
              <Scrollanimation src={datascience} alt="datascience" />
            </div>
            <div className='jsnodediv-class skillicon'>
              <Scrollanimation src={nodeimage} alt="node" />
              <Scrollanimation src={jsimage} alt="js" />
            </div>
            <div className='reactmongodiv-class skillicon'>
              <Scrollanimation src={reactimage} alt="react" />
              <Scrollanimation src={mongoimage} alt="mongodb" />
            </div>
          </div>

        </div>

      }
    </div>

  )
}

export default About
