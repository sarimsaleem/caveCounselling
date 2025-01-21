import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenChild, setIsModalOpenChild] = useState(false);


    const renderTitle = () => {
        if (isModalOpen) {
            return 'Adult Counselling at Cave Counselling'
        } else {
            return 'Child Counselling at Cave Counselling'
        }
    }

    const onClose = () => {
        setIsModalOpen(false)
        setIsModalOpenChild(false)
    }

    const renderContent = () => {
        if (isModalOpen) {
            return <>
                <p>Life can feel overwhelming, at times it may be full of challenges, change, and uncertainty. You may feel stuck, misunderstood, or unsure where to turn. Cave Counselling offers you a safe, supportive space where you can explore your feelings, share your struggles, and reconnect with yourself.</p>
                <p>As an integrative counsellor, I draw on a range of approaches to meet your unique needs. Our work together will be client-led, focusing on what you choose to bring to each session. I may explore how your past shapes your present using psychodynamic techniques or introduce practical tools like CBT or mindfulness to help you manage day-to-day challenges. I believe you already have the resources within you to heal and grow. My role is to support and guide you, tailoring each session to your individual needs in a warm and non-judgmental environment.</p>
                <p>Taking the first step can feel daunting, but you don’t have to face it alone. By working together, you can find clarity, strength, and a path forward.</p>
            </>
        } else if (isModalOpenChild) {
            return <>
                <p>There’s something magical about caves—their mystery sparks curiosity and a sense of adventure in children. Just like stepping into a cave, entering the counselling room invites exploration and discovery. Children naturally wonder: What will I uncover? What will this journey feel like?</p>
                <p>Through play and creativity, children can connect with their thoughts and emotions in a safe and welcoming environment. Counselling offers them a chance to share their worries, express their feelings, and explore challenges in a way that feels natural and engaging.</p>
                <p>At Cave Counselling, my aim is to help children develop healthy communication skills, build resilience, and nurture emotional well-being. Just like exploring a cave can be an adventure of growth and self-discovery, counselling is a journey where children can feel supported, understood, and empowered every step of the way.</p>
            </>
        }
    }



    return (
        <>
            <div className='services-main section-padding' id='services'>
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="services-heading heading-with-sub">
                                <h6 className="p-0 m-0">My</h6>
                                <h3 className="p-0 m-0">Services</h3>
                                <p>"How precious is the therapy space, where someone offers you their full undivided attention, truly listening to every word you share."</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card-container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6">
                                <div className="service-card d-flex justify-content-center align-items-center text-center">
                                    <div className="service-card-content">
                                        <h4>Adult Counselling at Cave Counselling</h4>
                                        <div className="service-card-btn">
                                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setIsModalOpen(true)}>VIEW DETAIL</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6">
                                <div className="service-card child-counselling d-flex justify-content-center align-items-center text-center" >
                                    <div className="service-card-content">
                                        <h4>Child Counselling at Cave Counselling</h4>
                                        <div className="service-card-btn">
                                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setIsModalOpenChild(true)}>VIEW DETAIL</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">{renderTitle()}</h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => onClose()}
                            ></button>
                        </div>
                        <div class="modal-body">
                            {renderContent()}
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn modal-btn border-radius"
                                data-bs-dismiss="modal"
                                onClick={() => onClose()}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Services
