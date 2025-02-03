import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './counselling.css';
import counellingimg1 from "../../Assets/counellingImg1.webp"
// import counellingimg2 from "../../Assets/counellingImg2.webp"
import counellingimg3 from "../../Assets/counellingImg3.webp"
import counellingimg4 from "../../Assets/counellingImg4.webp"


const Counselling = () => {
    const location = useLocation();
    const { title, description, image } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='counselling-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center heading-with-sub '>
                        <h6>{title}</h6>
                    </div>
                </div>
                <div className='row counselling-main-section-row' >
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <div className="counselling-main-img-container">
                        <img src={image} alt={title} className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <div className="counselling-description">
                            {Array.isArray(description) && description.map((item, index) => (
                                <p className='counselling-para' key={index}>{item}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="counselling-sub-container section-padding">
                    <div className="row g-4">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="counselling-ing-container">
                                <img src={counellingimg1} className='counselling-ing-container' alt="" />
                            </div>
                        </div>
                        {/* <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="counselling-ing-container">
                                <img src={counellingimg2} className='counselling-ing-container' alt="" />
                            </div>
                        </div> */}
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="counselling-ing-container">
                                <img src={counellingimg3} className='counselling-ing-container' alt="" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="counselling-ing-container">
                                <img src={counellingimg4} className='counselling-ing-container' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counselling;
