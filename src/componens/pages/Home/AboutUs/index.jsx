import about1 from "../../../../assets/images/about-us.svg";
import "./style.scss";
import Word from "../../methode/index";

export function AboutUs() {
  const commonAOS = { "data-aos": "fade-up", "data-aos-easing": "linear" };

  return (
    <div className="aboutus" id="about-us">
      <div className="container">
        {" "}
        <div className="row" >
          <div className="img-about col-md-6">
            <div className="about-img">
              <img
                className="img-1"
                src={about1}
                alt=""
                {...commonAOS}
                data-aos-delay="200"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="content">
              {" "}
              <span className="site-title-span">
                <Word v="AboutTitle" />{" "}
              </span>
              <h2 className="site-title">
                <Word v="AboutText1" />
              </h2>
              <hr></hr>
              <p className="about-text">
                <Word v="AboutText2" /> .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
