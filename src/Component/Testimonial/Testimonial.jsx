import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './testimonial.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const testimonialData = [
    {
      avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "",
      review: "This is the first time in my life that I reached out for counselling and Shama made it so easy to share my story. (Adult Client)",
    },
    {
      avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
      name: "",
      review: "It felt comforting to talk to someone who understood my culture and I felt understood. (Young Person, Age 15)",
    },
    {
      avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
      name: "",
      review: "I wish I could come to counselling every day, I feel relaxed in the room, and Shama helps me with my negative thoughts, so they don’t upset me so much. (Child, Age 9)",
    },
    {
      avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      name: "",
      review: "I wasn’t sure if counselling would help me, but It made me feel lighter and less anxious. (Young Person, Age 16)",
    },
  ];

  return (
    <div className="testimonial section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <div className="testimonials-heading heading-with-sub">
              <h3 className="p-0 ">Testimonial</h3>
              <h6 className="p-0 m-0">Our Clients Reviews</h6>
            </div>
          </div>
        </div>


        <div className="swiper-container-main">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
              <div className="swiper-container">
                <Swiper
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={2.3}
                  loop={true}
                  spaceBetween={30}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    depth: 800,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000 }}
                  breakpoints={{
                    300: { slidesPerView: 1 },
                    501: { slidesPerView: 2 },
                    724: { slidesPerView: 2.3 },
                  }}
                >
                  {testimonialData.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      {/* <div className="ImgHolder"> */}
                      {/* <img src={item.avatar} alt={item.name} /> */}
                      {/* </div> */}
                      <div className="ContentHolder">

                        <h3>{item.name}</h3>
                        <p><RiDoubleQuotesL className='left-quote' />
                          {item.review}<RiDoubleQuotesR className='right-quote' />
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Testimonials;

