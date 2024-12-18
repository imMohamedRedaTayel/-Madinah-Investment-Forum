import img1 from "../../../../assets/images/Objectives/airdrop.svg";
import img2 from "../../../../assets/images/Objectives/chart.svg";
import img3 from "../../../../assets/images/Objectives/money-recive.svg";
import img4 from "../../../../assets/images/Objectives/profile-2user.svg";
import img5 from "../../../../assets/images/Objectives/receipt-2.svg";
import img6 from "../../../../assets/images/Objectives/search-status.svg";
import img7 from "../../../../assets/images/Objectives/status-up.svg";
import img8 from "../../../../assets/images/Objectives/verify.svg";
import "./style.scss";

import Word from "../../methode/index";

export default function Objectives() {
  return (
    <div className="Objectives" id="Objectives">
      <div className="container">
        {" "}
        {/* <h5>الاستثمار في المستقبل يبدأ من هنا</h5> */}
        <h2 className="mb-4">
          <Word v="ObjectivesTitle" />
        </h2>
        <p>
          <Word v="ObjectivesText1" />
        </p>
        <div className="list row">
          <div className="col-md-3">
            <div className="content">
              <img src={img1} />
              <h5>
                <Word v="ObjectivesText2" />
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={img2} />
              <h5>
                <Word v="ObjectivesText3" />{" "}
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={img3} />
              <h5>
                <Word v="ObjectivesText4" />
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={img4} />
              <h5>
                <Word v="ObjectivesText5" />{" "}
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={img5} />
              <h5>
                <Word v="ObjectivesText6" />
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={img6} />
              <h5>
                <Word v="ObjectivesText7" />
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={img7} />
              <h5>
                <Word v="ObjectivesText8" />
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={img8} />
              <h5>
                <Word v="ObjectivesText9" />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
