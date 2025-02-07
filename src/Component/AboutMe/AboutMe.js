import director from '../../Assets/aboutme.webp'
import './aboutMe.css'

function AboutMe() {

    return (
        <div className='about-us-msg section-padding' id='about-me' >
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center about-us-msg-row'>
                    <div className='col-md-12 col-sm-12 col-lg-6 col-xl-6'>
                        <div className='msg-img-container d-flex justify-content-center align-items-center flex-column'>
                            <div className='msg-img'>
                                <img src={director} alt='aboutme' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-lg-6 col-xl-6'>
                        <div className='msg-container'>
                            <div className='msg-heading heading-with-sub'>
                                <h3 className="p-0" style={{}}>About Me</h3>
                                <h6 className="p-0 m-0">Hello I’m Shama</h6>
                            </div>
                            <div className='msg-content'>
                                <p>An Integrative Counsellor working with adults and specialising in children and young people</p>
                                <p>Welcome to my counselling practice</p>
                                <p>I am a qualified BACP Integrative Counsellor based in East London, offering both in-person and online sessions for children, young people, and adults. I have experience supporting clients facing a range of challenges, including low mood, depression, chronic illness, bereavement, trauma, abuse, and anxiety. Specifically, for children and young people, I have experience addressing bullying, self-harm, social pressures, academic and family issues, social, emotional, and mental health (SEMH) needs, as well as working with neurodiversity, including ADHD and Autism.</p>
                                <p>My approach provides a safe, private, and non-judgmental space where you can explore your thoughts and feelings at your own pace. I am here to support you in navigating difficulties and working toward your goals. Every counselling journey is unique to each client, and I am committed to creating a tailored approach that respects your individuality. As a Muslim woman, I understand the significance of culture and faith in shaping identity. I ensure my practice aligns with these values, fostering a holistic understanding of each client and their lived experiences. </p>
                                <p>Whether you are seeking support for yourself or a loved one, I’m here to offer a warm, empathic and culturally sensitive space where you feel truly heard.</p>
                            </div>
                            {/* <div className='about-btn-cont'>
                                <button type="Submit" className='about-btn' > <a href='#'></a> More About Me</button>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe