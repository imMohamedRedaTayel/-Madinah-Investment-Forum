import Container from "react-bootstrap/Container";
import prince from "../../../../assets/images/prince.svg";
import prince2 from "../../../../assets/images/PRINCE2.svg";
import "./style.scss";
import AOS from "aos";
import { useEffect } from "react";

import Word from "../../methode/index";

export default function Prince() {
  // const commonAOS = { "data-aos": "fade-up", "data-aos-easing": "linear" };

  return (
    <div className="Prince">
      <div className="">
        <div className="row bg-yyy">
          <div className="col-md-4">
            {" "}
            <div className="prince-img">
              <img src={prince2} className="" />
            </div>
          </div>
          <div className="col-md-8 Prince-Text">
            <div className="content">
              {" "}
              <h4 className="mb-4">
                <Word v="PrinceTitle" />
              </h4>
              <h2 className="mb-4">
                <Word v="PrinceText1" />
              </h2>
              <hr />
              <p className="about-text">
                <Word v="PrinceText2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
