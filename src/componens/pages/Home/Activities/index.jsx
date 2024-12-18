import img1 from "../../../../assets/images/numbers/1.svg";
import img2 from "../../../../assets/images/numbers/2.svg";
import img3 from "../../../../assets/images/numbers/3.svg";
import img4 from "../../../../assets/images/numbers/4.svg";
import img5 from "../../../../assets/images/numbers/5.svg";
import img6 from "../../../../assets/images/numbers/6.svg";
import img7 from "../../../../assets/images/numbers/7.svg";
import img8 from "../../../../assets/images/numbers/8.svg";
import "./style.scss";

import Word from "../../methode/index";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Activities() {
  const { t } = useTranslation();
  
  // Main list of activities
  const listMain = [
    {
      title: "ActivitiesText1",
      parg: "ActivitiesText2",
      imaf_url: img1,
    },
    {
      title: "ActivitiesText3",
      parg: "ActivitiesText4",
      imaf_url: img2,
    },
    {
      title: "ActivitiesText5",
      parg: "ActivitiesText6",
      imaf_url: img3,
    },
    {
      title: "TimeLineText5",
      parg: "ActivitiesText8",
      imaf_url: img4,
    },
  ];

  // Sub list of activities
  const listsub = [
    {
      title: "ActivitiesText9",
      parg: "ActivitiesText10",
      imaf_url: img5,
    },
    {
      title: "ActivitiesText11",
      parg: "ActivitiesText12",
      imaf_url: img6,
    },
    {
      title: "ActivitiesText13",
      parg: "ActivitiesText14",
      imaf_url: img7,
    },
    {
      title: "ActivitiesText15",
      parg: "ActivitiesText16",
      imaf_url: img8,
    },
  ];

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className="Activities" id="activities">
      <div className="container">
        <h5 data-aos="fade-up">
          <Word v="ActivitiesText17" />
        </h5>
        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <Word v="ActivitiesText18" />
        </h2>
        <p data-aos="fade-up" data-aos-delay="400">
          <Word v="ActivitiesText19" />
        </p>

        <h5 className="type-title" data-aos="fade-up" data-aos-delay="600">
          <span></span> <Word v="ActivitiesText20" />
          <span></span>
        </h5>

        <div className="list row">
          {listMain.map((item, index) => (
            <div
              className="col-md-3"
              key={item.imaf_url}
              data-aos="fade-up"
              data-aos-delay={index * 200} // Stagger the animation delay
            >
              <div className="content">
                <img src={item.imaf_url} alt={t(item.title)} />
                <h5>{t(item.title)}</h5>
                <p>{t(item.parg)}</p>
              </div>
            </div>
          ))}
        </div>

        <h5 className="type-title" data-aos="fade-up" data-aos-delay="800">
          <span></span>
          {t("Accompanyingevents")} <span></span>
        </h5>

        <div className="list row">
          {listsub.map((item, index) => (
            <div
              className="col-md-3"
              key={item.imaf_url}
              data-aos="fade-up"
              data-aos-delay={index * 200} // Stagger the animation delay
            >
              <div className="content">
                <img src={item.imaf_url} alt={t(item.title)} />
                <h5>{t(item.title)}</h5>
                <p>{t(item.parg)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
