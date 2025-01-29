import React, { useState, useRef } from 'react';
import './about.css';
import about from './../../Assets/aboutimg.png';

function AboutUs() {
    const sectionRef = useRef(null);

    const handleToggle = () => {
        const extraContent = document.getElementById('extra-content');
        const toggleBtn = document.getElementById('toggle-btn');

        if (extraContent.style.display === 'none' || extraContent.style.display === '') {
            extraContent.style.display = 'block';
            toggleBtn.innerText = 'Read Less';
        } else {
            extraContent.style.display = 'none';
            toggleBtn.innerText = 'Read More';
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='about-main section-padding' id='about-us' ref={sectionRef}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-7'>
                        <div className='about-content'>
                            <div className="heading-with-sub about-heading">
                                <h3 className="p-0">More About Me</h3>
                                <h6 className="p-0 m-0">“As a therapist, I am not the answer to your problems, but I am a step in the right direction”</h6>
                            </div>
                            <div className='about-para'>
                                <p className='about-paragh'>
                                    The saying “a problem shared is a problem halved” deeply resonates with me. I truly believe in the power of talking and the positive impact sharing one’s feelings can have on mental well-being. As a natural listener, I’ve always found joy in helping others, and being able to do this as part of my profession is incredibly rewarding. There’s nothing more fulfilling than supporting people on their journey to better understand themselves and find meaning in their experiences.
                                </p>

                                <p>
                                    I am a qualified BACP Integrative Counsellor, trained in a range of therapeutic approaches, allowing me to tailor each session to meet your unique needs. My work draws on modalities such as person-centred therapy, attachment theory, systemic approaches, CBT, and psychodynamic therapy. Always keeping your needs at the forefront.
                                </p>
                                <div id="extra-content" style={{ display: 'none' }}>

                                    <p><span className='para-bold'>Experience and Approach : </span> With over a decade of experience in the charity sector, youth helplines, family support, mentoring, and education, I have worked with individuals from diverse backgrounds, cultures, and religions. This breadth of experience has given me valuable insight into the challenges people face and how to support them with understanding and empathy.
                                    </p>
                                    <p><span className='para-bold'>Working with Children and Young People : </span> In my role as a school counsellor, I take a whole-school approach to mental health, working closely with staff and parents to best support the child’s emotional well-being. My work includes individual and group therapy, solution-focused drop-ins, adolescent CBT, and crisis counselling. At the core of my practice is a commitment to building trusting, empathetic relationships and providing children with a safe, confidential space to explore their emotions.
                                    </p>
                                    <p><span className='para-bold'>My Practice : </span>
                                        Currently, I divide my time between working as a school counsellor in both primary and secondary settings, providing online counselling for a children’s mental health charity and an adult counselling service, as well as supporting clients in my private practice.
                                    </p>
                                    <p><span className='para-bold'>Qualifications : </span></p>
                                    <ul>
                                        <li>I am a member of the British Association of Counselling and Psychotherapy (BACP) and adhere to their ethical framework of good practice.</li>
                                        <li>I hold an enhanced DBS and have professional indemnity insurance.</li>
                                        <li>Diploma in Integrative Counselling specialising in children and young people.</li>
                                        <li>BSc Psychology.</li>
                                        <li>Online and Telephone counselling Certificate.</li>
                                        <li>Trauma informed Practitioner.</li>
                                        <li>Certificate in Bereavement counselling.</li>
                                        <li>Level 2 advanced Safeguarding Adults and Children.</li>
                                        <li>Level 2 Adult counselling.</li>
                                    </ul>

                                    <p>In addition to my training, I am committed to continuous personal and professional development.</p>
                                </div>
                                <button
                                    id='toggle-btn'
                                    className='read-more-btn'
                                    onClick={handleToggle}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-lg-5'>
                        <div className='about-img'>
                            <img className='img-fluid' src={about} alt='About Us' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
