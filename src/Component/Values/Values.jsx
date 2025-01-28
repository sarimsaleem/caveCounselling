import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./value.css";

const Values = () => {
  const slides = [
    { heading: 'Professionalism', text: 'As a member of BACP, I am committed to providing a high-quality professional service and abide by their ethical framework to ensure integrity, respect and competence in my work.' },
    { heading: 'Confidentiality', text: 'I have a legal and ethical responsibility to protect my clients confidentiality, I strongly follow the confidentiality agreement as stated in our contract. Please see my privacy policy for more details.' },
    { heading: 'Non-Directive', text: 'I believe you are the expert on your own life and hold the inner resources to overcome your challenges. My role is to support and guide you, creating a space where you can explore your thoughts and feelings without being given advice or ‘answers’.' },
    { heading: 'Non-Judgmental', text: 'I provide a safe, non-judgmental space where you can share openly without fear of criticism. As someone from a South Asian background, I understand cultural stigma and pressures, and I respect your autonomy to make your own choices.' },
    { heading: 'Empathy', text: 'I understand how daunting it can be to seek support. While I may not have lived your experience, I am here to walk alongside you, listen with care, and see the world through your eyes to support you on your journey.' },
    { heading: 'Acceptance', text: 'I value embracing each individual as they are and respecting their choices, whatever they bring to our sessions. None of us is perfect, and by acknowledging both the good and the challenging aspects of ourselves, we create space for growth and positive change.' },
  ];

  return (
    <div className="values section-padding">
      <div className="container">
        <div className="heading-with-sub">
          <h6 className="values-heading">What You Can Expect From Me</h6>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: { 
              slidesPerView: 1,
            },
            768: {  
              slidesPerView: 2,
            },
            1024: {  
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="values-swiper-slide">
              <h2 className="">{slide.heading}</h2>
              <p className="">{slide.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Values;
