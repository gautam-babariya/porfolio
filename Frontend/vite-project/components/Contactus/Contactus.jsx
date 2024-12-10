import React, { useRef, useState, useEffect } from 'react';
import './Contactus.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useSpring, animated } from '@react-spring/web';
import Header from './Header/Header';


Modal.setAppElement('#root');

function Contactus() {
    // animation 
    const [isVisibled, setIsVisibled] = useState(false);
    const ref = useRef(null);

    // Setup Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisibled(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // Adjust as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const props = useSpring({
        opacity: isVisibled ? 1 : 0,
        transform: isVisibled ? 'scale(1)' : 'scale(0.5)',
        config: { duration: 1000 },
    });

    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            name: formdata.name,
            email: formdata.email,
            message: formdata.message,
        };
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('email', productData.email);
        formData.append('message', productData.message);
        const contacturl = import.meta.env.VITE_CONTACTME_URL
        
        try {
            const response = await axios.post(contacturl, productData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.data === 1) {
                setModalMessage("Thank you for submit. I will contact you soon");
                setModalIsOpen(true);
                setTimeout(() => {
                    // window.location.reload(); 
                    setModalIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 2000);
            }
        } catch (error) {
            console.error("There was an error sending the data!", error);
        }
    };
    return (
        <>
        <Header />
        <animated.div ref={ref} className='contactpage' style={props} >
            <div class="container"  id='contactme'>
                <h1>Contact</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div class="form-group" >
                        <label for="name" >Name:</label>
                        <input type="text" id="name" name="name" onChange={handleChange} required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleChange} required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" onChange={handleChange} required></textarea>
                    </div>
                    <button className='buttoncontact' type="submit">Submit</button>
                </form>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="ReactModal__Content">
                    <h2 className='popuph2'>{modalMessage}</h2>
                </Modal>
            </div>
        </animated.div>
        </>
    )
}

export default Contactus
