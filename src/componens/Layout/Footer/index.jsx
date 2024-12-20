import { Container } from "react-bootstrap";
import "./style.scss";
import log from "../../../assets/images/logo-white.png";
import sms from "../../../assets/images/sms.svg";
import calling from "../../../assets/images/call-calling.svg";
import location from "../../../assets/images/location.svg";
import soc1 from "../../../assets/images/soicalMedia/soc1.svg";
import soc2 from "../../../assets/images/soicalMedia/soc2.svg";
import soc3 from "../../../assets/images/soicalMedia/soc3.svg";
import soc4 from "../../../assets/images/soicalMedia/soc4.svg";
import { NavLink } from "react-router-dom";
import Word from "../../pages/methode/index";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Footer-info row">
          {/* <div className="shap"></div> */}
          <div className="content-footer-sec1 col-md-6 mb-3">
            <img src={log} />
            <p className="mt-4" style={{ textAlign: "justify" }}>
              <Word v="FooterText1" />
            </p>
          </div>
          <div className="content-footer-sec2 col-md-2 mb-3">
            <p>
              {" "}
              <img src={sms} />
              <Word v="FooterText2" />
            </p>
            <span>info@mdif.sa</span>
          </div>
          <div className="content-footer-sec3 col-md-2 mb-3">
            <p>
              <img src={calling} />
              <Word v="FooterText3" />
            </p>
            <p>920028910</p>
          </div>
          <div className="content-footer-sec4 col-md-2 mb-3">
            <p>
              {" "}
              <img src={location} />
              <Word v="FooterText5" />
            </p>
            <span>
              <Word v="FooterText6" />
            </span>
          </div>
          <hr></hr>
          <div className="bottom-footer">
            <p className="right-text">
              <Word v="FooterText7" />
            </p>
            {/* <ul>
              <li>
                <img src={soc1} />
              </li>
              <li>
                <img src={soc2} />
              </li>
              <li>
                <img src={soc3} />
              </li>
              <li>
                <img src={soc4} />
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
