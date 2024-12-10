import React, { useState } from 'react'
import './Cardslider.css';
import Card from '../Card/Card'
import './Cardslider.css';

import filmmaker from './accets_cs/shiv_studio.jpg'
import emailspam from './accets_cs/emailspam.webp'

function Cardslider() {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="page1 carousel-item active">
          <div class="insidepage1">
            <Card icon={filmmaker} title='Studio Web App' description="I developed a studio portfolio web application utilizing the MERN stack" link='https://filmmaker.vercel.app' link2 = 'https://github.com/gautam-babariya/Filmmaker.git' />
            <Card icon={emailspam} title='Email Spam Detector' description="This is email-spam detector app which is developed in mern stack and ML model" link='https://emailspamdetect-app.vercel.app/' link2='https://github.com/gautam-babariya/emailspamdetect-app.git'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardslider
