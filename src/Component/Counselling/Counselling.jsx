import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './counselling.css'; // Optional: Add specific styles for this page

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
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={image} alt={title} className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        {Array.isArray(description) && description.map((item, index) => (
                            <p className='counselling-para' key={index}>{item}</p>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Counselling;
