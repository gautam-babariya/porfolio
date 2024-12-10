import React, { useState } from 'react'
import './Socialmedia.css'
import linkedin from './accets/linkedin.svg';
import github from './accets/github.svg'
import gmail from './accets/gmail.svg'
import instagram from './accets/instagram.svg'

function Socialmedia() {

    return (
        <>
            <div id='socialmediaicon'>
                <a href="https://linkedin.com/in/gautam-babariya-64b34620b" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} className='socialmediasvg' alt="SVG Icon" width="30" height="30" />
                </a>
                <a href="https://github.com/gautam-babariya" target="_blank" rel="noopener noreferrer">
                    <img src={github} className='socialmediasvg' alt="SVG Icon" width="30" height="30" />
                </a>
                <a href="https://www.instagram.com/er.gautambabariya_125/profilecard/?igsh=cnRpZHlkNDJvdWEy" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} className='socialmediasvg' alt="SVG Icon" width="30" height="30" />
                </a>
                <a href="mailto:gautambabariyacontact@gmail.com?subject=Inquiry%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."  target="_blank" rel="noopener noreferrer">
                    <img src={gmail} className='socialmediasvg' alt="SVG Icon" width="30" height="30" />
                </a>
            </div>
        </>
    )
}

export default Socialmedia
