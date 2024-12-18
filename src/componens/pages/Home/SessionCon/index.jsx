import { NavLink } from "react-router-dom";
import "./style.scss";

import Word from "../../methode/index";
import { useSelector } from "react-redux";

export default function SessionCon() {
  const Sessions = useSelector((state) => state.SessionList);

  return (
    <div className="SessionCon" id="discussion-sessions">
      {" "}
      <div className="container">
        {" "}
        <h5>
          <Word v="SessionsTitle" />
        </h5>
        <h2 className="mb-4">
          <Word v="SessionsText1" />{" "}
        </h2>
        <p>
          <Word v="SessionsText2" />
        </p>
      </div>
      <div className="list row">
        {Sessions.map((session) => (
          <div className="col-md-3" key={session}>
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
        {/* <div className="col-md-3">
          <div className="content img1">
            <NavLink to="/sessions">
              {" "}
              <div className="shap">
                <div className="info">
                  <h5>
                    <Word v="SessionsText6" />{" "}
                  </h5>
                  <p>
                    <Word v="SessionsText7" />{" "}
                  </p>
                </div>
                <p>
                  <Word v="SessionsText8" />{" "}
                </p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content img3">
            <NavLink to="/sessions">
              {" "}
              <div className="shap">
                <div className="info">
                  <h5>
                    <Word v="SessionsText9" />
                  </h5>
                  <p>
                    <Word v="SessionsText10" />
                  </p>
                </div>
                <p>
                  {" "}
                  <Word v="SessionsText11" />
                </p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col-md-3">
          <div className="content img4 ">
            <NavLink to="/sessions">
              {" "}
              <div className="shap">
                <div className="info">
                  {" "}
                  <h5>
                    {" "}
                    <Word v="SessionsText12" />
                  </h5>
                  <p>
                    <Word v="SessionsText13" />
                  </p>
                </div>
                <p>
                  {" "}
                  <Word v="SessionsText14" />{" "}
                </p>
              </div>
            </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
}
