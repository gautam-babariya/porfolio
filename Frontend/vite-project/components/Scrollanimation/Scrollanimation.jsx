import './Scrollanimation.css'
import React, { useRef, useEffect, useState } from 'react';

const Scrollanimation = ({ src, alt }) => {
    const [isVisibles, setIsVisibles] = useState(false);
    const imageRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisibles(true);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 } // Adjust this value to control when the image becomes visible
        );
    
        if (imageRef.current) {
          observer.observe(imageRef.current);
        }
    
        return () => {
          if (imageRef.current) {
            observer.unobserve(imageRef.current);
          }
        };
      }, []);
  return (
    <img
    ref={imageRef}
    src={src}
    alt={alt}
    className={`svgicon image ${isVisibles ? 'visible' : ''}`}
  />
  )
}

export default Scrollanimation
