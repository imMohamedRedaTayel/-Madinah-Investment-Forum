import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import logo01 from "../../../../assets/images/logo/01.jpg";
import logo02 from "../../../../assets/images/logo/02.jpg";
import logo03 from "../../../../assets/images/logo/03.jpg";
import logo04 from "../../../../assets/images/logo/04.jpg";
import logo05 from "../../../../assets/images/logo/05.jpg";
import logo06 from "../../../../assets/images/logo/06.jpg";
import logo07 from "../../../../assets/images/logo/07.jpg";
import logo08 from "../../../../assets/images/logo/08.jpg";
import logo09 from "../../../../assets/images/logo/09.jpg";
import logo10 from "../../../../assets/images/logo/010.jpg";
import logo11 from "../../../../assets/images/logo/011.jpg";
import logo12 from "../../../../assets/images/logo/012.jpg";
import logo13 from "../../../../assets/images/logo/013.jpg";
import logo14 from "../../../../assets/images/logo/014.jpg";
import logo15 from "../../../../assets/images/logo/015.jpg";
import logo16 from "../../../../assets/images/logo/016.jpg";

import "./style.scss";
import { useTranslation } from "react-i18next";

export default function Supporters() {
  const { t } = useTranslation();
  
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  const Strategic_companies = [
    logo03,
    logo04,
    logo05,
    logo06,
    logo07,
    logo08,
    logo09
  ];
  
  const Advisory_Sponsors = [logo10, logo11];

  return (
    <div className="Supporters" id="Supporters">
      <div className="container">
        <h5 data-aos="fade-up">{t("ForumPartners")}</h5>
        <h2 data-aos="fade-up" data-aos-delay="100" className="mb-4">{t("mes1")}</h2>
        
        <div className="row top_sec">
          <div className="col-md-6" data-aos="fade-up">
            <h5>
              <span></span>{t("Supervision")}<span></span>
            </h5>
            <img src={logo01} />
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <h5>
              <span></span>{t("organization")}<span></span>
            </h5>
            <img src={logo02} />
          </div>
        </div>
        
        <h5 className="type-title" data-aos="fade-up" data-aos-delay="200">
          <span></span> {t("Strategiccompanies")} <span></span>
        </h5>
        <div className="list" data-aos="fade-up" data-aos-delay="200">
          {Strategic_companies.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="content">
                <img src={item} alt={`Strategic Company ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-md-4" data-aos="fade-up">
            <h5 className="type-title">
              <span></span> {t("StrategicSponsors")} <span></span>
            </h5>
            <div className="list">
              {Advisory_Sponsors.map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="content">
                    <img src={item} alt={`Advisory Sponsor ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-md-8 subsec">
            <div className="row">
              <div className="col-md-4" data-aos="fade-up">
                <h5 className="type-title">{t("LegalServicesSponsor")}</h5>
                <div className="list">
                  <img src={logo12} alt="Legal Services Sponsor" />
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <h5 className="type-title">{t("DigitalMediaSponsor")}</h5>
                <div className="list">
                  <img src={logo13} alt="Digital Media Sponsor" />
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <h5 className="type-title">{t("TechnicalSponsor")}</h5>
                <div className="list">
                  <img src={logo14} alt="Technical Sponsor" />
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <h5 className="type-title">{t("ScientificPartner")}</h5>
                <div className="list">
                  <img src={logo15} alt="Scientific Partner" />
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <h5 className="type-title">{t("ProductionSponsor")}</h5>
                <div className="list">
                  <img src={logo16} alt="Production Sponsor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
