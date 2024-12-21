import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Word from "../../methode/index";
import header1 from "../../../../assets/images/header1.svg";
import header2 from "../../../../assets/images/header2.svg";
import header3 from "../../../../assets/images/header3.svg";
import header4 from "../../../../assets/images/header4.svg";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const imageSet = [
  {
    image: header1,
    text: <Word v="hed1" />,
    description: <Word v="description1" />,
  },
  {
    image: header2,
    text: <Word v="hed2" />,
    description: <Word v="description2" />,
  },
  {
    image: header3,
    text: <Word v="hed3" />,
    description: <Word v="description3" />,
  },
  {
    image: header4,
    text: <Word v="hed4" />,
    description: <Word v="description4" />,
  },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, [currentIndex]);

  const handleListClick = (index) => {
    setFade(true);
    setCurrentIndex(index);
    setTimeout(() => setFade(false), 800); // تأثير الانتقال
  };

  return (
    <>
      <div
        className="featured-article"
        style={{ backgroundImage: `url(${imageSet[currentIndex].image})` }}
      >
        <div className="overlay">
          <div className={`content ${fade ? "fade" : ""}`} data-aos="fade-up">
            <h3 className="featured-label" data-aos="fade-up">
              {imageSet[currentIndex].text}
            </h3>
            <h1 className="title" data-aos="fade-up">
              {imageSet[currentIndex].description}
            </h1>
          </div>
        </div>
        <div className="footer">
          <ul className="footer-links">
            {imageSet.map((item, index) => (
              <li
                key={index}
                className={index === currentIndex ? "active" : ""}
                onClick={() => handleListClick(index)}
              >
                <div className="diamond">
                  <span>{index + 1}</span>
                </div>
                <h6>{item.text}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3900,
          disableOnInteraction: false,
        }}
        speed={1000}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
          setFade(true);
          // setTimeout(() => setFade(false), 800); // تأثير الانتقال
        }}
        slidesPerView={1}
        initialSlide={currentIndex}
      >
        {imageSet.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              {/* <h2 className="bg-danger">{item.text}</h2> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
