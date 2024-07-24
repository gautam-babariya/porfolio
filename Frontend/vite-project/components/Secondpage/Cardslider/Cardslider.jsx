import React, { useState } from 'react'
import './Cardslider.css';
import Card from '../Card/Card'
import './Cardslider.css';

import mern from './accets_cs/MERN-logo.png';
import github from './accets_cs/gitwhite.png'
import datascience from './accets_cs/datascienc.png'

function Cardslider() {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="page1 carousel-item active">
          <div class="insidepage1">
            <Card icon={datascience} title="ML/AI" description="I am proficient in machine learning and deep learning, with expertise in developing and deploying models for predictive analytics and data-driven solutions." />
            <Card icon={mern} title="MERN STACK" description="I am MERN developer with expertise in MongoDB, Express.js, React, and Node.js. I excel in both front-end and back-end development." />
            <Card icon={github} title="GITHUB" description="I am proficient in Git and GitHub, with strong skills in version control and collaboration." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardslider
