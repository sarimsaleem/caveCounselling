import director from '../../Assets/aboutme .png'
import './aboutMe.css'

function AboutMe() {
    return (
        <div className='about-us-msg section-padding'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center about-us-msg-row'>
                    <div className='col-md-6 col-sm-12 col-lg-6 col-xl-6'>
                        <div className='msg-img-container d-flex justify-content-center align-items-center flex-column'>
                            <div className='msg-img'>
                                <img src={director} alt='aboutme' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 col-lg-6 col-xl-6'>
                        <div className='msg-container'>
                            <div className='msg-heading heading-with-sub'>
                                <h3 className="p-0 m-0">About Me</h3>
                                <h6 className="p-0 m-0">Hello I’m Shama</h6>
                            </div>
                            <div className='msg-content'>
                                <p>an Integrative Counsellor working with adults and specialising in children and young people</p>
                                <p>Welcome to my counselling practice</p>
                                <p>I am a qualified BACP Integrative Counsellor based in East London, offering both in-person and online sessions for children, young people, and adults. I have experience supporting clients facing a range of challenges, including low mood, depression, chronic illness, bereavement, trauma, abuse, and anxiety. Specifically, for children and young people, I have experience addressing bullying, self-harm, social pressures, academic and family issues, social, emotional, and mental health (SEMH) needs, as well as working with neurodiversity, including ADHD and Autism.</p>
                                <p>Whether you are seeking support for yourself or a loved one, I’m here to offer a warm, empathic and culturally sensitive space where you feel truly heard.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe