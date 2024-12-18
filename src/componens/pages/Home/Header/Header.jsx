// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import header1 from "../../../../assets/images/header1.svg";
import header12 from "../../../../assets/images/header12.svg";
import header2 from "../../../../assets/images/header2.svg";
import header21 from "../../../../assets/images/header22.svg";
import header3 from "../../../../assets/images/header3.svg";
import header31 from "../../../../assets/images/header32.svg";
import header4 from "../../../../assets/images/header4.svg";
import header41 from "../../../../assets/images/header42.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import Word from "../../methode/index";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Header() {
  return (
    <div className="header-slide">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 12500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row m-0 p-0">
            <div className="col-md-4  m-0 p-0">
              <div className="right-sec">
                <div className="content">
                  <p className="mb-4">
                    {" "}
                    <Word v="hed1" />{" "}
                  </p>
                  <h1 className="mb-4">
                    {/* {t("h2")} */}
                    <Word v="title1" />

                    {/* منتدى المدينة للاستثمار: نافذة جديدة لفرص اقتصادية واعدة{" "} */}
                  </h1>
                  <p>
                    <Word v="description1" />
                  </p>
                </div>

                <div className="img">
                  <img src={header12} />
                </div>
              </div>
            </div>
            <div className="col-md-8  m-0 p-0">
              <div className="left-sec">
                <img src={header1} />
                <div className="content">
                  <h3>04</h3>
                  <p>
                    <Word v="section1" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row m-0 p-0">
            <div className="col-md-4  m-0 p-0">
              <div className="right-sec">
                <div className="content">
                  <p className="mb-4">
                    <Word v="hed2" />
                  </p>
                  <h1 className="mb-4">
                    <Word v="title2" />
                  </h1>
                  <p>
                    <Word v="description2" />
                  </p>
                </div>

                <div className="img">
                  <img src={header21} />
                </div>
              </div>
            </div>
            <div className="col-md-8  m-0 p-0">
              <div className="left-sec">
                <img src={header2} />
                <div className="content">
                  <h3>01</h3>
                  <p>
                    <Word v="section2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row m-0 p-0">
            <div className="col-md-4  m-0 p-0">
              <div className="right-sec">
                <div className="content">
                  <p className="mb-4">
                    {" "}
                    <Word v="hed3" />{" "}
                  </p>
                  <h1 className="mb-4">
                    <Word v="title3" />
                  </h1>
                  <p>
                    <Word v="description3" />
                  </p>
                </div>

                <div className="img">
                  <img src={header31} />
                </div>
              </div>
            </div>
            <div className="col-md-8  m-0 p-0">
              <div className="left-sec">
                <img src={header3} />
                <div className="content">
                  <h3>02</h3>
                  <p>
                    <Word v="section3" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row m-0 p-0">
            <div className="col-md-4  m-0 p-0">
              <div className="right-sec">
                <div className="content">
                  <p className="mb-4">
                    <Word v="title4" />
                  </p>
                  <h1 className="mb-4">
                    <Word v="title4" />
                  </h1>
                  <p>
                    <Word v="description4" />
                  </p>
                </div>

                <div className="img">
                  <img src={header4} />
                </div>
              </div>
            </div>
            <div className="col-md-8  m-0 p-0">
              <div className="left-sec">
                <img src={header41} />
                <div className="content">
                  <h3>03</h3>
                  <p>
                    <Word v="section4" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
