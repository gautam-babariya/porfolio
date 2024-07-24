import React, { useRef, useState, useEffect } from 'react';
import './Finalepage.css';
import '../Cardslider/Cardslider.css'
import Header from '../Header/Header'
import Cardslider from '../Cardslider/Cardslider';
import { useSpring, animated } from '@react-spring/web';

function Finalepage() {
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
    <animated.div ref={ref} style={props}>
    <div className="app">
    <Header />
    <Cardslider />
  </div>
  </animated.div>
  )
}

export default Finalepage
