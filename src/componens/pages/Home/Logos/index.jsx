import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./style.scss";
// Import required modules
import { Autoplay } from "swiper/modules";

// Import your logo images
import logo1 from "../../../../assets/images/logo/logo1.svg";
import logo2 from "../../../../assets/images/logo/logo2.svg";
import logo3 from "../../../../assets/images/logo/logo3.svg";
import logo4 from "../../../../assets/images/logo/logo4.svg";
import logo5 from "../../../../assets/images/logo/logo5.svg";

export default function LogoSlider() {
  return (
    <div className="logo-slider">
      <div className="container">
        {" "}
        <Swiper
          spaceBetween={50}
          slidesPerView={5} // Number of logos per view
          loop={true} // Infinite loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide for small screens
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2, // 2 slides for medium screens
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // 3 slides for tablets
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5, // 5 slides for larger screens
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content">
              <img src={logo1} alt="Logo 1" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo2} alt="Logo 2" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo3} alt="Logo 3" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo4} alt="Logo 4" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo5} alt="Logo 5" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo2} alt="Logo 2" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo3} alt="Logo 3" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo4} alt="Logo 4" className="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <img src={logo5} alt="Logo 5" className="logo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
