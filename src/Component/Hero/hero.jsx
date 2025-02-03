import React, { useEffect } from 'react';
import './hero.css';
import { FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

const HeroSection = () => {

    useEffect(() => {
        const adjustBannerPosition = () => {
            const navbar = document.querySelector('.navbar');
            const heroMain = document.querySelector('.hero-main');
            const navbarHeight = navbar.offsetHeight;
            // heroMain.style.marginTop = `${navbarHeight}px`;
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
                    {/* <div className='sub-header-main'>
                        <div className="container nav-upper-text res-none">
                            <p className='nav-header-text'>
                                Integrative Counsellor for Children, Young people and Adults. Online, by phone and in-person in Walthamstow, East London
                            </p>
                            <div className='nav-icon-parent'>
                                <a href="tel:+447777966289">
                                    <FaPhone className='nav-icons-header-phone' />
                                </a>|
                                <a href="mailto:cavecounselling@outlook.com">
                                    <IoIosMail className='nav-icons-header-mail' />
                                </a>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-md-7 col-sm-12 col-lg-7 col-xl-7">
                        <div className="col-md-11 col-sm-12 col-lg-11 col-xl-10">
                            <div className='sub-header-main'>
                                <div className="container nav-upper-text res-none">
                                    <p className='nav-header-text'>
                                        Integrative Counsellor for Children, Young people and Adults. Online, by phone and in-person in Walthamstow, East London
                                    </p>
                                    <div className='nav-icon-parent'>
                                        <a href="tel:+447777966289">
                                            <FaPhone className='nav-icons-header-phone' />
                                        </a>|
                                        <a href="mailto:cavecounselling@outlook.com">
                                            <IoIosMail className='nav-icons-header-mail' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
