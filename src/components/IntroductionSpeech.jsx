import React, { useEffect } from 'react'

export default function IntroductionSpeech({ text }) {

    useEffect(() => {
        // Check if the browser supports the Web Speech API
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);

            // Optional: Configure speech properties
            utterance.volume = 1; // 0 to 1
            utterance.rate = 1;   // 0.1 to 10
            utterance.pitch = 1;  // 0 to 2
            utterance.lang = 'en-US'; // Set language

            // Speak the text
            window.speechSynthesis.speak(utterance);

            // Cleanup function to stop speech when the component unmounts
            return () => {
                window.speechSynthesis.cancel();
            };
        } else {
            console.error("Text-to-speech not supported in this browser.");
        }
    }, [text]); // Dependency on 'text' ensures it runs if the text prop changes
    return (
        <div>
            {/* You can display a message or alternative content here */}
            <p>Welcome to our website! (Audio introduction is playing...)</p>
        </div>
    )
}
