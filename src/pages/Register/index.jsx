import RegisterCon from "../../componens/pages/RegisterCon";
import logoShadow from "../../assets/images/logo-shadow.svg"
import AOS from "aos";
import { useEffect } from "react";
import './style.scss'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Register() {
  
  const navigator = useNavigate();
      const { t } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
      navigator("/");
    }
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", // Easing for the animation
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <div className="RegisterCon">
      <div className="container">
        {" "}
        <h4> {t("ml1")}</h4>
        <h1>
          <span></span>
          {t("ml2")}
        </h1>
        <p>{t("ml3")}</p>
        <div className="row">
          {" "}
          <div className="col-md-6">
            <img src={logoShadow} />
          </div>
          <div className="col-md-6">
            {" "}
            <RegisterCon />
          </div>
        </div>
      </div>
    </div>
  );
}
