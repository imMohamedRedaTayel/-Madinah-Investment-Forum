import LoginCon from "../../componens/pages/LoginCon";
import logoShadow from "../../assets/images/logo-shadow.svg"
import AOS from "aos";
import { useEffect } from "react";
import './style.scss'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Login() {
  
    const { t } = useTranslation();
  const navigator = useNavigate();
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
    <div className="Loginpage">
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
            <LoginCon />
          </div>
        </div>
      </div>
    </div>
  );
}
