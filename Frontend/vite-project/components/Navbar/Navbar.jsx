import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './accets/photo-big-removebg.png'
import {HashLink as Link} from "react-router-hash-link"
import { BrowserRouter } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';


const Navbar = () => {

    return (
        <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary header_class">
            <div class="container-fluid">
                <div className='divofbrand_class'>
                    <img className='navlogo_class' src={logo}></img>
                    <a className="brandname_class" href="/">Gautam Babariya</a>
                </div>
                <button class="navbar-toggler buttonline_class" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon threeline_class"></span>
                </button>
                <div class="collapse navbar-collapse divofmenu_class" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 divofmenu_class">
                        <li class="nav-item">
                            <Link className="nav-link active options_class" aria-current="page" to="#about" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link options_class" to="#skills" smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link options_class" to="#projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link options_class" to="#contactme" smooth={true} duration={500}>contact me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </BrowserRouter>
    );
};


export default Navbar;
