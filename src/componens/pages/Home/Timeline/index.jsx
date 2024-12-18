import "./style.scss";
import arrowGoLeft from "../../../../assets/images/arrowGoLeft.svg";
import arrowGoRight from "../../../../assets/images/arrowGoRight.svg";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Word from "../../methode/index";
import { useTranslation } from "react-i18next";
export default function Timeline() {
  const { t } = useTranslation();
  const [ShowTime, setShowTime] = useState(1);
    useEffect(() => {
      AOS.init({
        duration: 1200, 
      });
    }, []);
  const TimeLines = [
    {
      date: "TimeLineText4",
      list: [
        {
          title: "ActivitiesText7",
          date: "date1",
        },
        {
          title: "TimeLineText6",
          date: "date1",
        },
        {
          title: "TimeLineText7",
          date: `07:30 ${t("Pm")}`,
        },
        {
          title: "TimeLineText8",
          date: ` 08:35 ${t("Pm")}`,
        },
      ],

      DatesLine: ["10:00 ", " 15:00  ​", "19:30", "20:35 "],
      imgArrow: arrowGoLeft,
    },
    {
      date: "TimeLineText9",
      list: [
        {
          title: "ActivitiesText7",
          date: `10:00 ${t("Am")} -  4:00 ${t("Pm")}`,
        },
        {
          title: "TimeLineText6",
          date: `10:00 ${t("Am")} -  4:00 ${t("Pm")}`,
        },
        {
          title: "TimeLineText10",
          date: `01:00 ${t("Pm")}`,
        },
        {
          title: "TimeLineText11",
          date: `02:00 ${t("Pm")}`,
        },
        {
          title: "TimeLineText12",
          date: `03:00 ${t("Pm")}`,
        },
      ],
      DatesLine: ["10:00", "13:00​", "14:00", "15:00","16:00"],
      imgArrow: arrowGoRight,
    },
  ];
  return (
    <div className="TimeLine">
      <div className="container">
        {" "}
        <h5 data-aos="fade-up">
          <Word v="TimeLineText1" />
        </h5>
        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <Word v="TimeLineText2" />
        </h2>
        <p data-aos="fade-up" data-aos-delay="400">
          <Word v="TimeLineText3" />
        </p>
      </div>
      <section className="TimeLines" data-aos="fade-up" data-aos-delay="1000">
        {TimeLines.map((item, index) => (
          <div
            className={`TimeLineSec ${ShowTime != index ? "show" : ""}`}
            key={item}
          >
            <div className="content container">
              {" "}
              <h5>
                {" "}
                <Word v="TimeLineText13" />
              </h5>
              <h2>{t(item.date)}</h2>
              <hr />
              <ul>
                {item.list.map((ListItem) => (
                  <li key={ListItem}>
                    <div className="content">
                      <p>{t(ListItem.title)} </p>
                      <div className="date">{t(ListItem.date)}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="dates-line">
                {item.DatesLine.map((ListItem) => (
                  <li key={ListItem}>{ListItem}</li>
                ))}
              </ul>
              <img
                src={item.imgArrow}
                className="imgArrow"
                onClick={() => {
                  setShowTime(index);
                }}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
