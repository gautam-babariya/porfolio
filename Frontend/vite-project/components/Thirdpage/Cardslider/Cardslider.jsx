import React, { useState } from 'react'
import './Cardslider.css';
import Card from '../Card/Card'
import './Cardslider.css';

import filmmaker from './accets_cs/shiv_studio.jpg'
import emailspam from './accets_cs/emailspam.webp'
import plive from './accets_cs/logo.png'

function Cardslider() {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="page1 carousel-item active">
          <div class="insidepage1">
            <Card icon={plive} title='It service agency' description="Plive creation is IT agency which provide web,app development,chatbot" link='https://plivecreation.vercel.app' link2 = 'https://github.com/gautam-babariya/plive-creation.git' />
            <Card icon={filmmaker} title='Studio Web App' description="I developed a studio portfolio web application utilizing the MERN stack" link='https://filmmakerstudio.vercel.app' link2 = 'https://github.com/gautam-babariya/Filmmaker.git' />
            <Card icon={emailspam} title='Email Spam Detector' description="This is email-spam detector app which is developed in mern stack and ML model" link='https://emailspamdetect-app.vercel.app/' link2='https://github.com/gautam-babariya/emailspamdetect-app.git'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardslider
