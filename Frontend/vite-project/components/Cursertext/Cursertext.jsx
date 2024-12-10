import React, { useEffect, useState } from 'react'
import './Cursertext.css'


function Demo() {
    const [text, setText] = useState(""); // The current text to show
    const [index, setIndex] = useState(0); // Keeps track of the current position in the text
    const [isDeleting, setIsDeleting] = useState(false); // Is the cursor deleting the text?
    const [currentPhrase, setCurrentPhrase] = useState("First MERN Developer"); // Phrase to type
    const [cycle, setCycle] = useState(0); // Counter for cycling between phrases

    const phrases = [
        "Data scientist",
        "MERN developer"
    ];

    const speed = 100; // Speed of typing in milliseconds
    const deleteSpeed = 50; // Speed of deleting

    useEffect(() => {
        let typingTimeout;

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setText((prevText) => prevText.slice(0, prevText.length - 1));
                setIndex((prevIndex) => prevIndex - 1);
            }, deleteSpeed);
        } else {
            typingTimeout = setTimeout(() => {
                setText((prevText) => prevText + phrases[cycle].charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }, speed);
        }

        // Change text when we reach the end of a phrase
        if (index === phrases[cycle].length) {
            setTimeout(() => setIsDeleting(true), 500); // Wait before starting to delete
        }

        if (index === 0 && isDeleting) {
            setIsDeleting(false);
            setCycle((prevCycle) => (prevCycle + 1) % phrases.length); // Cycle through phrases
        }

        return () => clearTimeout(typingTimeout);
    }, [text, index, isDeleting, cycle]);

    return (
        <div style={{ fontSize: "2.8rem", whiteSpace: "nowrap" }}>
            <span className='animationtext'>{text}</span>
            <span className="cursor">|</span>
        </div>
    )
}

export default Demo
