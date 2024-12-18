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
  const {t} = useTranslation();
  const Strategic_companies = [
    logo03,
    logo04,
    logo05,
    logo06,
    logo07,
    logo08,
    logo09];
  const Advisory_Sponsors = [logo10, logo11 ];
  return (
    <div className="Supporters" id="Supporters">
      <div className="container">
        {" "}
        <h5>{t("ForumPartners")}</h5>
        <h2 className="mb-4">{t("mes1")}</h2>
        <div className="row top_sec">
          <div className="col-md-6">
            <h5>
              <span></span>
              {t("Supervision")}
              <span></span>
            </h5>
            <img src={logo01} />
          </div>
          <div className="col-md-6">
            <h5>
              <span></span>
              {t("organization")}
              <span></span>
            </h5>
            <img src={logo02} />
          </div>
        </div>
        <h5 className="type-title">
          <span></span> {t("Strategiccompanies")}، <span></span>
        </h5>
        <div className="list">
          {Strategic_companies.map((item) => (
            <div key={item}>
              <div className="content">
                <img src={item} />
              </div>
            </div>
          ))}
        </div>{" "}
        <div className="row">
          <div className="col-md-4">
            <h5 className="type-title">
              <span></span> {t("StrategicSponsors")}<span></span>
            </h5>
            <div className="list">
              {Advisory_Sponsors.map((item) => (
                <div key={item}>
                  <div className="content">
                    <img src={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8 subsec">
            <div className="row">
              <div className="col-md-4">
                <h5 className="type-title">
                  <span></span> {t("LegalServicesSponsor")}<span></span>
                </h5>
                <div className="list">
                  <img src={logo12} />
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="type-title">
                  <span></span> {t("DigitalMediaSponsor")}<span></span>
                </h5>
                <div className="list">
                  <img src={logo13} />
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="type-title">
                  <span></span> {t("TechnicalSponsor")}<span></span>
                </h5>
                <div className="list">
                  <img src={logo14} />
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="type-title">
                  <span></span> {t("ScientificPartner")}<span></span>
                </h5>
                <div className="list">
                  <img src={logo15} />
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="type-title">
                  <span></span> {t("ProductionSponsor")}<span></span>
                </h5>
                <div className="list">
                  <img src={logo16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
