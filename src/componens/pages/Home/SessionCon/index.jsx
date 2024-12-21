import { NavLink } from "react-router-dom";
import "./style.scss";
import { useEffect } from "react";
import Word from "../../methode/index";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SessionCon() {
  const Sessions = useSelector((state) => state.SessionList);
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
  return (
    <div className="SessionCon" id="discussion-sessions">
      {" "}
      <div className="container">
        {" "}
        <h5 data-aos="fade-up">
          <Word v="SessionsTitle" />
        </h5>
        <h2 className="mb-4"  data-aos="fade-up" data-aos-delay="200">
          <Word v="SessionsText1" />{" "}
        </h2>
        <p  data-aos="fade-up" data-aos-delay="400">
          <Word v="SessionsText2" />
        </p>
      </div>
      <div className="list row">
        {Sessions.map((session , index ) => (
          <div className="col-md-2 p-0 " key={index}>
            <NavLink to={`/sessions`}>
              {" "}
              <div className="content ">
                <div className="shap">
                  <div className="info">
                    <h5>{session.title}</h5>
                    <p>{session.description}</p>
                  </div>{" "}
                  <p> {session.start_at}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
