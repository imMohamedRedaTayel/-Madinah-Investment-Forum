import { NavLink, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import logoColor from "../../../assets/images/logo-com.png";
import avatar from "../../../assets/images/avatar.svg";
import "./style.scss";
import { getUser, Logout } from "../../../store/actions/auth-action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSession } from "../../../store/actions/session-action";
export default function NavbarCom() {
  const dispatch = useDispatch();
   const userInfo = useSelector((state) => state.UserInfo);
   const location = useLocation();
   console.log("location", location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();


  document.body.dir = i18n.dir();

  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18n", lng);
    document.body.dir = i18n.dir();
    
        dispatch(fetchSession());

  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true); // Add class when scrolled past 100px
    } else {
      setScrolled(false); // Remove class when not scrolled
    }
  };

  const handelLogout = () => {
     dispatch(Logout());   
  };
  useEffect(() => {
    dispatch(getUser());
    console.log("userInfo", userInfo);
    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar fixed-nave ${
        location.pathname != "/" ? "navbarPages" : ""
      }`}
    >
      <div className="container">
        <Navbar.Brand href="/" className="logo">
          <img src={logoColor}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <a className="active nav-link link-page" href="/#header">
              {t("Home")}
            </a>
            <a className="nav-link link-page" href="/#about-us">
              {t("about")}
            </a>
            <a className="nav-link link-page" href="/#Objectives">
              {t("objectives")}
            </a>
            <a className="nav-link link-page" href="/#discussion-sessions">
              {t("DiscussionSessions")}
            </a>
            <a className="nav-link link-page" href="/#activities">
              {t("activities")}
            </a>
            {/* <a className="nav-link link-page" href="/#Speakers">
              {t("speacker")}
            </a> */}
            <a className="nav-link link-page" href="/#Supporters">
              {t("Supporters")}
            </a>
            {/* <NavDropdown
              show
              title={t("activities")}
              id="basic-nav-dropdown"
              className="link-page"
            >
              <NavLink to="/mzadat">{t("Auctions")}</NavLink>
              <NavLink to="/sessions">{t("Discussion_sessions")}</NavLink>
              <NavLink to="/workshops">{t("Workshops_meetings")}</NavLink>
            </NavDropdown> */}
            {/* <NavLink className="nav-link link-page" to="/contact-us">
              {t("contactus")}
            </NavLink> */}
            <Dropdown className="lang-dropdown" show>
              <Dropdown.Toggle id="dropdown-basic">
                {i18n.language}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("ar")}>
                  Arabic
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  {t("Eng")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {localStorage.getItem("token") ||
            sessionStorage.getItem("token") ? (
              <Dropdown className="lang-dropdown" show>
                <Dropdown.Toggle id="dropdown-basic">
                  <span>
                    {" "}
                    <img src={avatar} className="avatar" />
                    <span>مرحبا , {userInfo.name}</span>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <NavLink to="/" onClick={()=>{handelLogout()}}>تسجيل الخروج</NavLink>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavLink className="nav-link  login" to="/login">
                {t("login")}
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
