import img1 from "../../../../assets/images/Objectives/airdrop.svg";
import img2 from "../../../../assets/images/Objectives/chart.svg";
import img3 from "../../../../assets/images/Objectives/money-recive.svg";
import img4 from "../../../../assets/images/Objectives/profile-2user.svg";
import img5 from "../../../../assets/images/Objectives/receipt-2.svg";
import img6 from "../../../../assets/images/Objectives/search-status.svg";
import img7 from "../../../../assets/images/Objectives/status-up.svg";
import img8 from "../../../../assets/images/Objectives/verify.svg";
import "./style.scss";

import Word from "../../methode/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Objectives() {
  useEffect(() => {
    AOS.init({
      duration: 1200,

    });
  }, []);

  return (
    <div className="Objectives" id="Objectives">
      <div className="container">
        <h2 className="mb-4" data-aos="fade-up">
          <Word v="ObjectivesTitle" />
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          <Word v="ObjectivesText1" />
        </p>
        <div className="list row">
          {/* Objective Items */}
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
            <div
              key={index}
              className="col-md-3"
              data-aos="zoom-in"
              data-aos-delay={index * 140} 
            >
              <div className="content">
                <img src={img} alt={`Objective-${index}`} />
                <h5>
                  <Word v={`ObjectivesText${index + 2}`} />
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
