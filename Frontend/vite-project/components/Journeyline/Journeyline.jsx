// ReactJS code to create a journey line for the portfolio

import React, { useEffect, useRef, useState } from 'react';
import './Journeyline.css'
import Journey from './accets/journeyline.png'
import { useSpring, animated } from '@react-spring/web';
import Aimlcerti from './accets/aimlparulcerti.pdf'
import Augustcodecerti from './accets/augustcodecerti.pdf'
import Myresume from './accets/Myresume.pdf'

const Journeyline = () => {
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
    return (
        <div id="backgroundcolor">
            <animated.div id="animateddivhe" ref={ref} style={props}>
                <div className='displayarrow whatabout1050'>
                    <div
                        className='divofsuggest'>Education &rarr;</div>
                    <div
                        className='divofsuggest'>About me &rarr;</div>
                    <div
                        className='divofsuggest'>Experience &rarr;</div>
                    <div
                        className='divofsuggest'>Resume &rarr;</div>
                </div>

                <div className='journeydiv'>
                    <img src={Journey} className='whatabout1050' alt="img" id='journeyline' />
                    <div id='divofinfo'>
                        <div className='titleinfo'>Education</div>
                        <div id='education'>
                            <strong id='pu'>Parul University </strong>B.Tech,CSE 2022 – 2026
                        </div>
                        <div className='titleinfo'>About me</div>
                        <div id='aboutme'>
                            I am a dedicated data scientist with a strong background in machine learning, deep learning, and generative AI. I specialize in analyzing complex datasets, building predictive models, and creating intelligent solutions that drive impactful decisions. My portfolio includes projects such as email spam classification, human face mask detection, and a YouTube video summarizer app, showcasing my ability to tackle real-world problems through data-driven innovation.<br></br>
                            In addition, I am a skilled MERN stack developer, proficient in building responsive and dynamic web applications using MongoDB, Express.js, React, and Node.js. My unique combination of data science expertise and full-stack development experience enables me to create end-to-end solutions that are both functional and intelligent.
                        </div>
                        <div className='titleinfo'>Experience</div>
                        <div id='experience'>
                            <div className='hackathondiv'>
                                <p id='hackathon1'>Attended <strong>AI ML 1.0 pu</strong> Hackathon</p>
                                <a href={Aimlcerti} download>
                                    <button class="button">Certificate</button>
                                </a></div>
                            <div className='hackathondiv'>
                                <p id='hackathon1'>Attended <strong>Augustcode solu. pu</strong> Hackathon</p>
                                <a href={Augustcodecerti} download>
                                    <button class="button">Certificate</button>
                                </a></div>
                        </div>
                        <div className='titleinfo'>Resume</div>
                        <div id='resume'>
                            <div className='hackathondiv'>
                                <p id='resumep'>Download resume</p>
                                <a href={Myresume} download>
                                    <button class="button">Click</button>
                                </a></div>
                        </div>
                    </div>
                </div>

            </animated.div>
        </div>
    );
};

export default Journeyline;
