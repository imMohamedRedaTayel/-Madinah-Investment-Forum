import Container from "react-bootstrap/Container";
import prince2 from "../../../../assets/images/PRINCE2.svg";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

import Word from "../../methode/index";

export default function Prince() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  return (
    <div className="Prince">
      <div className="">
        <div className="row bg-yyy">
          {/* Left Image Section */}
          <div className="col-md-4" data-aos="fade-up">
            <div className="prince-img">
              <img src={prince2} className="" alt="Prince" />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="col-md-8 Prince-Text" data-aos="fade-left">
            <div className="content">
              <h4 className="mb-4" data-aos="fade-up" data-aos-delay="200">
                <Word v="PrinceTitle" />
              </h4>
              <h2 className="mb-4" data-aos="fade-up" data-aos-delay="400">
                <Word v="PrinceText1" />
              </h2>
              <hr data-aos="zoom-in" data-aos-delay="600" />
              <p
                className="about-text"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <Word v="PrinceText2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
