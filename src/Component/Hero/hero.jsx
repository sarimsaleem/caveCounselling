import React, { useEffect } from 'react';
import './hero.css';

const HeroSection = () => {
    useEffect(() => {
        const adjustBannerPosition = () => {
            const navbar = document.querySelector('.navbar');  // Get the navbar
            const heroMain = document.querySelector('.hero-main');  // Get the hero section
            const navbarHeight = navbar.offsetHeight;  // Get the navbar height
            heroMain.style.marginTop = `${navbarHeight}px`;  // Adjust the margin-top of the hero section
        };

        // Call the function initially
        adjustBannerPosition();

        // Re-adjust when the window is resized
        window.addEventListener('resize', adjustBannerPosition);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', adjustBannerPosition);
        };
    }, []);  // Empty dependency array to run only once after component mounts

    return (
        <div className='hero-main' id='home'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 col-sm-12 col-lg-7 col-xl-7">
                        <div className="hero-content">
                            <div className="hero-content-heading">
                                <h4 className='p-0 m-0'>Welcome to</h4>
                                <h1 className='p-0 m-0'>Cave Counselling</h1>
                            </div>
                            <p className='p-0 m-0'>
                                “A sanctuary where you can escape the noise of the world and reconnect with your inner self. Amid the hustle and bustle of daily life, moments of stillness to reflect, explore, and find clarity are rare...”
                            </p>
                            <div className="hero-content-btn">
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
