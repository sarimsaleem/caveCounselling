import "swiper/css";
import "./value.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Values = () => {
  const sliderRef = useRef(null);

  const slides = [
    {
      heading: "Professionalism",
      text: "As a member of BACP, I am committed to providing a high-quality professional service and abide by their ethical framework to ensure integrity, respect, and competence in my work.",
    },
    {
      heading: "Confidentiality",
      text: "I have a legal and ethical responsibility to protect my clients' confidentiality. I strongly follow the confidentiality agreement as stated in our contract. Please see my privacy policy for more details.",
    },
    {
      heading: "Non-Directive",
      text: "I believe you are the expert on your own life and hold the inner resources to overcome your challenges. My role is to support and guide you, creating a space where you can explore your thoughts and feelings without being given advice or ‘answers’.",
    },
    {
      heading: "Non-Judgmental",
      text: "I provide a safe, non-judgmental space where you can share openly without fear of criticism. As someone from a South Asian background, I understand cultural stigma and pressures, and I respect your autonomy to make your own choices.",
    },
    {
      heading: "Empathy",
      text: "I understand how daunting it can be to seek support. While I may not have lived your experience, I am here to walk alongside you, listen with care, and see the world through your eyes to support you on your journey.",
    },
    {
      heading: "Acceptance",
      text: "I value embracing each individual as they are and respecting their choices, whatever they bring to our sessions. None of us is perfect, and by acknowledging both the good and the challenging aspects of ourselves, we create space for growth and positive change.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  };

  return (
    <div className="values">
      <div className="container">
        <div className="values-heading heading-with-sub">
        <h6 className="">What You Can Expect From Me</h6>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} style={{ padding: "10px" }}>
              <h2 className="slide-heading">{slide.heading}</h2>
              <p className="slide-text">{slide.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Values;
