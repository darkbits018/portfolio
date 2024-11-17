import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const titles = [
        "Aspiring Backend Engineer",
        "AI/ML Enthusiast",
        "Open Source Contributor",
        "Driven by Curiosity",
        "One API at a Time"
    ];

    useEffect(() => {
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseDuration = 1500;

        const type = () => {
            const currentTitle = titles[currentIndex];

            if (!isDeleting) {
                setDisplayText(currentTitle.substring(0, displayText.length + 1));

                if (displayText.length === currentTitle.length) {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                    return;
                }
            } else {
                setDisplayText(currentTitle.substring(0, displayText.length - 1));

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
                    return;
                }
            }
        };

        const timer = setTimeout(
            type,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [displayText, currentIndex, isDeleting]);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center p-8 md:p-16 font-sans">
            <div className="max-w-3xl">
                {/* Name Section */}
                <div className="mb-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 font-mono tracking-tight">
                        I'm <span className="text-blue-400">Abhay</span>
                    </h1>
                </div>

                {/* Typing Effect */}
                <div className="mb-8 h-12">
                    <h3 className="text-xl md:text-2xl text-white font-light tracking-wide">
                        <span className="text-blue-400 font-medium">{displayText}</span>
                        <span className="animate-pulse text-blue-400">|</span>
                    </h3>
                </div>

                {/* Description */}
                <div className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light tracking-wide">
                    <p className="opacity-90">
                        Passionate about solving real-world problems with technology,
                        I specialize in building intelligent systems and scalable backend solutions.
                        I'm also committed to contributing to open-source projects that empower
                        developers worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;