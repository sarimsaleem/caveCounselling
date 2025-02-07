import React from 'react';
import { useNavigate } from 'react-router-dom';
import './services.css';
import adultCounselling from "../../Assets/adultCoun.webp"
// import childCounselling from "../../Assets/childcoun.webp"
import childCounselling from "../../Assets/childcoun.webp"

const Services = () => {
    const navigate = useNavigate();

    const servicesData = {
        child: {
            title: 'Child Counselling',
            description: [
                "There’s something magical about caves—their mystery sparks curiosity and a sense of adventure in children. Just like stepping into a cave, entering the counselling room invites exploration and discovery. Children naturally wonder: What will I uncover? What will this journey feel like?",
                "Through play and creativity, children can connect with their thoughts and emotions in a safe and welcoming environment. Counselling offers them a chance to share their worries, express their feelings, and explore challenges in a way that feels natural and engaging.",
                "At Cave Counselling, my aim is to help children develop healthy communication skills, build resilience, and nurture emotional well-being. Just like exploring a cave can be an adventure of growth and self-discovery, counselling is a journey where children can feel supported, understood, and empowered every step of the way."
            ],
            image: childCounselling,
        },
        adult: {
            title: 'Adult Counselling',
            description: [
                "Life can feel overwhelming, at times it may be full of challenges, change, and uncertainty. You may feel stuck, misunderstood, or unsure where to turn. Cave Counselling offers you a safe, supportive space where you can explore your feelings, share your struggles, and reconnect with yourself.",
                "As an Integrative Counsellor, I draw on a range of approaches to meet your unique needs. Our work together will be client-led, focusing on what you choose to bring to each session. I may explore how your past shapes your present using psychodynamic techniques or introduce practical tools like CBT or mindfulness to help you manage day-to-day challenges.",
                "Taking the first step can feel daunting, but you don’t have to face it alone. By working together, you can find clarity, strength, and a path forward."
            ],
            image: adultCounselling,
        },
    };

    const navigateToCounselling = (type) => {
        const selectedService = servicesData[type];
        navigate('/counselling', { state: selectedService });
    };

    return (
        <div className='services-main section-padding' id='services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 '>
                        <div className='services-heading heading-with-sub'>
                            <h3 className='p-0'>My</h3>
                            <h6 className='p-0 m-0'>Services</h6>
                            <p>“How precious is the therapy space, where someone offers you their full undivided attention, truly listening to every word you share.”</p>
                        </div>
                    </div>
                </div>
                <div className='service-card-container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-sm-12 col-xl-6'>
                            <div className='service-card child-counselling d-flex justify-content-center align-items-center text-center'>
                                <div className='service-card-content'>
                                    <h4>Child Counselling</h4>
                                    <div className='service-card-btn'>
                                        <button
                                            className='btn btn-primary'
                                            onClick={() => navigateToCounselling('child')}
                                        >
                                            VIEW DETAIL
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 col-xl-6'>
                            <div className='service-card d-flex justify-content-center align-items-center text-center'>
                                <div className='service-card-content'>
                                    <h4>Adult Counselling</h4>
                                    <div className='service-card-btn'>
                                        <button
                                            className='btn btn-primary'
                                            onClick={() => navigateToCounselling('adult')}
                                        >
                                            VIEW DETAIL
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
