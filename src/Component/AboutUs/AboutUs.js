import React from 'react'
import './about.css'
import about from './../../Assets/aboutimg.png'

function AboutUs() {
    return (
            <div className='about-main section-padding' id='about-us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 col-sm-12 col-lg-7 col-xl-7'>
                            <div className='about-content'>
                                <div className="heading-with-sub about-heading">
                                    <h6 className="p-0 m-0">ABOUT</h6>
                                    <h3 className="p-0 m-0">CAVE COUNSELLING</h3>
                                </div>
                                <div className='about-para'>
                                    <p className='about-paragh'>
                                    The saying “a problem shared is a problem halved” deeply resonates with me. I truly believe in the power of talking and the positive impact sharing one’s feelings can have on mental well-being. As a natural listener, I’ve always found joy in helping others, and being able to do this as part of my profession is incredibly rewarding. There’s nothing more fulfilling than supporting people on their journey to better understand themselves and find meaning in their experiences.
                                    </p>
                                    <p>
                                    I am a qualified BACP Integrative Counsellor, trained in a range of therapeutic approaches, allowing me to tailor each session to meet your unique needs. My work draws on modalities such as person-centred therapy, attachment theory, systemic approaches, CBT, and psychodynamic therapy. Always keeping your needs at the forefront.
                                    </p>
                                    <p ><span className='para-bold'>Experience and Approach : </span> With over a decade of experience in the charity sector, youth helplines, family support, mentoring, and education, I have worked with individuals from diverse backgrounds, cultures, and religions. This breadth of experience has given me valuable insight into the challenges people face and how to support them with understanding and empathy.
                                    </p>
                                    <p ><span className='para-bold'>Working with Children and Young People : </span> I trained with Place2Be, one of the UK’s leading children’s mental health charities, where I gained experience using creative and play-based approaches. I incorporate techniques such as sand play therapy, mindfulness, and grounding exercises, creating a safe, symbolic way for children to process their emotions and experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 col-sm-12 col-lg-5 col-xl-5'>
                            <div className='about-img'>
                                <img className='img-fluid' src={about} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutUs