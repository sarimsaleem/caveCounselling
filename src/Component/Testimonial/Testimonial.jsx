import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './testimonial.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const testimonialData = [
    {
      avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Simonette Lindermann",
      review: "Mind-blowing discovery! Changed my routine. Essential for everyone. Can't imagine without it!",
    },
    {
      avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
      name: "Merilee Beal",
      review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone.",
    },
    {
      avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
      name: "Suzi Lankester",
      review: "Phenomenal addition! Completely transformed my days. Strongly endorse for all. A game-changer!",
    },
    {
      avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      name: "Gaston Cunnow",
      review: "Amazing product! It changed my life. Highly recommended to everyone!",
    },
    {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all.",
    },
  ];

  return (
    <div className="testimonial section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <div className="heading-with-sub">
              <h6 className="p-0 m-0">Testimonial</h6>
              <h3 className="p-0 m-0">Our CLients Reviews</h3>
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
                      <div className="ImgHolder">
                        <img src={item.avatar} alt={item.name} />
                      </div>
                      <div className="ContentHolder">
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
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
