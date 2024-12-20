import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { subscribe } from "../../../store/actions/session-action";
import { useState } from "react";
export default function SessionConsec() {
  const [Loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const Sessions = useSelector((state) => state.SessionList);
  const navigator = useNavigate();
  const handelSessionShar = async (id) => {
    setLoading(true);
    if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
      await dispatch(subscribe(id));

      setLoading(false);
    } else {
      navigator("/login");
    }
  };
  return (
    <div className="SessionConsec" id="discussion-sessions">
      <div className="container">
        {Sessions.map((session) => (
          <section className=" row mb-5 " key={session}>
            <div className="col-md-4 image-sec">
              {" "}
              <div className="content img2">
                <div className="shap">
                  <div className="info">
                    <h5>{session.title}</h5>
                    <p> {session.description}</p>
                  </div>{" "}
                  <p>{session.start_at}</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 content-sec">
              <h3>{t("Topics")}</h3>
              <ul>
                {session.items.map((item) => (
                  <li key={item}>
                    <p>{item.title} </p>
                  </li>
                ))}
              </ul>
              <h3>{t('speackers')}</h3>
              <div className="speackers_list row">
                {session.speakers.map((speacker) => (
                  <div className=" col-lg-4 col-md-4" key={speacker}>
                    <img src={speacker.image} />
                    <div className="text-content">
                      <h5>{speacker.title}</h5>
                      <p>{speacker.job}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="btn"
                onClick={() => handelSessionShar(session.id)}
                disabled={Loading ? "true" : ""}
              >
                {Loading ? (
                  <span> {t("waiting")} ....</span>
                ) : (
                  <span> {t("loginsession")} </span>
                )}
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
