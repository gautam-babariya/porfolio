// ReactJS code to create a journey line for the portfolio

import React, { useEffect, useRef, useState } from 'react';
import './Journeyline.css'
import Journey from './accets/journeyline.png'
import { useSpring, animated } from '@react-spring/web';
import Aimlcerti from './accets/aimlparulcerti.pdf'
import Augustcodecerti from './accets/augustcodecerti.pdf'
import Myresume from './accets/Myresume.pdf'

const styles = {
    container: {
        padding: '10px',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        borderRadius: '5px',
    },
};

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
            <animated.div ref={ref} style={props}>
                <div id='blurcolor' style={{ position: "relative", height: "auto", paddingTop: "2rem", backgroundColor: "#edf2f8" }}>
                    {/* Display SVG as an image */}
                    <img
                        src={Journey}
                        alt="Journey Line"
                        style={{ height: "90vh", marginLeft: "12rem", marginTop: "-2rem" }}
                        className="visibleimg"
                    />

                    {/* Point 1: education */}
                    <div className="adjustresponsive">
                        <div className="part2class" style={{ position: "absolute", top: "2rem", left: "1rem", width: "max-contant" }}>
                            <h3
                                className="indexofjourney">Education &#8594;</h3>
                        </div>
                        <div className="divofjourneytext part2class" style={{ position: "absolute", top: "1.15rem", left: "29rem", width: "max-contant" }}>
                            <span className="journeytext" style={{ color: "black" }}><h5 id="educationfield">Parul University(vadodara)</h5><br></br>
                                Bachelor of Technology (B.Tech), Computer Science and Engineering (CSE)
                                2022 – 2026</span>
                        </div>
                    </div>



                    {/* Point 2: About me */}
                    <div className="adjustresponsive divpart2class">
                        <div className="part2class" style={{ position: "absolute", top: "15rem", left: "1rem", width: "max-contant" }}>
                            <h3 className="indexofjourney">About me &#8594;</h3>
                        </div>
                        <div className="divofjourneytext part2class" style={{ position: "absolute", top: "11rem", left: "20rem" }}>
                            <span className="journeytext" id="aboutmebio" style={{ color: "black" }}>I am a dedicated data scientist with a strong background in machine learning, deep learning, and generative AI. I specialize in analyzing complex datasets, building predictive models, and creating intelligent solutions that drive impactful decisions. My portfolio includes projects such as email spam classification, human face mask detection, and a YouTube video summarizer app, showcasing my ability to tackle real-world problems through data-driven innovation.<br></br>
                                In addition, I am a skilled MERN stack developer, proficient in building responsive and dynamic web applications using MongoDB, Express.js, React, and Node.js. My unique combination of data science expertise and full-stack development experience enables me to create end-to-end solutions that are both functional and intelligent.</span>
                        </div>
                    </div>

                    {/* Point 3: Certifications */}
                    <div className="adjustresponsive divpart3">
                        <div className="part2class" style={{ position: "absolute", top: "29.5rem", left: "1rem", width: "max-contant" }}>
                            <h3 className="indexofjourney">Experience &#8594;</h3>
                        </div>
                        <div className="divofjourneytext part2class" style={{ position: "absolute", top: "27.5rem", left: "30rem" }}>
                            {/* <span className="journeytext" style={{ color: "black" }}> */}
                            <div className="certidiv" style={styles.container}>
                                <h7 className="hackathontext">Participated in the <strong>Augustcode Solu. Pvt. Ltd.</strong> Hackathon</h7>
                                {/* Button for downloading the certificate */}
                                <a href={Augustcodecerti} download>
                                    <button className='changecolor' style={styles.button}>Download Certificate</button>
                                </a>
                            </div>
                            <div className="certidiv" style={styles.container}>
                                <h7 className="hackathontext">Participated in the <strong>Al/ML Hackathon 1.0 at parul university</strong></h7>
                                {/* Button for downloading the certificate */}
                                <a href={Aimlcerti} download>
                                    <button className='changecolor' style={styles.button}>Download Certificate</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Point 4: Download Resume */}
                    <div className="adjustresponsive divpart3">
                        <div className="part2class" style={{ position: "absolute", top: "42.5rem", left: "1rem", width: "max-contant" }}>
                            <h3 className="indexofjourney">Resume &#8594;</h3>
                        </div>
                        <div className="divofjourneytext part2class" style={{ position: "absolute", top: "42.2rem", left: "18rem" }}>
                            <div style={styles.container}>
                                <h7><strong>My resume</strong></h7>
                                {/* Button for downloading the certificate */}
                                <a href={Myresume} download>
                                    <button className='changecolor' style={styles.button}>Download Certificate</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </animated.div>
        </div>
    );
};

export default Journeyline;
