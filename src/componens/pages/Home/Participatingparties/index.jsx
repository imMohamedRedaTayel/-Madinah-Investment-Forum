import { useTransition } from "react";
import logo17 from "../../../../assets/images/logo/017.jpg";
import logo18 from "../../../../assets/images/logo/018.jpg";
import logo19 from "../../../../assets/images/logo/019.jpg";
import logo20 from "../../../../assets/images/logo/020.jpg";
import logo21 from "../../../../assets/images/logo/021.jpg";
import logo22 from "../../../../assets/images/logo/wzartbea.jfif";
import logo23 from "../../../../assets/images/logo/023.jpg";
import logo24 from "../../../../assets/images/logo/024.jpg";
import logo25 from "../../../../assets/images/logo/025.jpg";
import logo26 from "../../../../assets/images/logo/026.jpg";
import logo27 from "../../../../assets/images/logo/027.jpg";
import logo29 from "../../../../assets/images/logo/029.jpg";
import logo30 from "../../../../assets/images/logo/030.jpg";
import logo31 from "../../../../assets/images/logo/031.jpg";
import logo32 from "../../../../assets/images/logo/032.jpg";
import logo33 from "../../../../assets/images/logo/033.jpg";
import log6 from "../../../../assets/images/logo/log6.jfif";
import logo34 from "../../../../assets/images/logo/034.jpg";
import log7 from "../../../../assets/images/logo/log7.jfif";
import logo35 from "../../../../assets/images/logo/035.jpg";
import logo36 from "../../../../assets/images/logo/036.jpg";
import logo37 from "../../../../assets/images/logo/037.jpg";
import logo38 from "../../../../assets/images/logo/038.jpg";
import log8 from "../../../../assets/images/logo/log8.jfif";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./style.scss";
import { useTranslation } from "react-i18next";
export default function Supporters() {
  const {t} = useTranslation();
    useEffect(() => {
      AOS.init({
        duration: 2000, // Animation duration
      });
    }, []);
  const Strategic_companies = [
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo24,
    logo25,
    logo26,
    logo27,
    logo29,
    logo30,
    logo31,
    logo32,
    log6,
    logo33,
    logo34,
    log7,
    logo35,
    logo36,
    logo37,
    logo38,
    log8,
  ];
  return (
    <div className="Supporters" id="Supporters">
      <div className="container">
        {" "}
        <h5 className="type-title" data-aos="fade-up" data-aos-delay="200">
          <span></span> {t("ParticipatingEntitiesForum")}
          <span></span>
        </h5>
        <div className="list-sec row">
          {Strategic_companies.map((item) => (
            <div className="col-md-2" key={item}>
              <div className="content" data-aos="fade-up" data-aos-delay="200">
                <img src={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
