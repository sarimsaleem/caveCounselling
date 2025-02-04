import React, { useEffect } from 'react';
import './hero.css';

const HeroSection = () => {

    useEffect(() => {
        const adjustBannerPosition = () => {
            const navbar = document.querySelector('.navbar');
            const heroMain = document.querySelector('.hero-main');
            const navbarHeight = navbar.offsetHeight;
        };

        adjustBannerPosition();

        window.addEventListener('resize', adjustBannerPosition);

        return () => {
            window.removeEventListener('resize', adjustBannerPosition);
        };
    }, []);

    return (<>

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
                                " A sanctuary where you can escape the noise of the world and reconnect with your inner self. Amid the hustle and bustle of daily life, moments of stillness to reflect, explore, and find clarity are rare. Whether you’re navigating challenges, feeling isolated, or seeking inner peace, you don’t have to face life’s transitions or hardships alone. Let this be your space for understanding, healing, and discovering the strength within. "
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
}

export default HeroSection;
