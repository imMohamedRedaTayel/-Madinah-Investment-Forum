import { Container } from "react-bootstrap";
import Header from "../../componens/common/Header";
import Arrows from "../../assets/images/arrow.svg";
import "./style.scss"
import { NavLink } from "react-router-dom";
import SessionConsec from "../../componens/pages/SessionCon";
import { t } from "i18next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSession } from "../../store/actions/session-action";
export default function Sessions() {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchSession());
   });
  return (
    <div className="Sessions">
      {" "}
      <Header name="Discussion_sessions" title="Discussion_sessions" />
      <div className="container my-5">
        <ul className="list">
          <li>
            <NavLink to="/">{t("Home")}</NavLink>
          </li>
          <li>
            <img src={Arrows} />
          </li>
          <li>{t("Discussion_sessions")} </li>
        </ul>{" "}
      </div>
      <SessionConsec />
    </div>
  );
}
