import "./style.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
export default function Supporters() {
  const Partners = useSelector((state) => state.Partners);
  const { t } = useTranslation();

  return (
    <div className="Supporters" id="Supporters">
      <div className="container">
        {" "}
        <h5>{t("ForumPartners")}</h5>
        <h2 className="mb-4">{t("mes1")}</h2>
        <div className="row top_sec">
          {Partners[9] ? (
            <div className="col-md-6">
              <h5 className="type-title">
                <span></span>
                {Partners[9].title}
                <span></span>
              </h5>
              <div className="list">
                <div className="content">
                  {Partners[9].partners.map((Part) => (
                    <img src={Part.image} key={Part} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {Partners[10] ? (
            <div className="col-md-6">
              <h5 className="type-title">
                <span></span>
                {Partners[10].title}
                <span></span>
              </h5>
              <div className="list">
                <div className="content">
                  {Partners[10].partners.map((Part) => (
                    <img src={Part.image} key={Part} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* <h5 className="type-title">
          <span></span> {t("Strategiccompanies")}، <span></span>
        </h5> */}
        {Partners[1] ? (
          <>
            <h5 className="type-title">
              <span></span>
              {Partners[1].title}
              <span></span>
            </h5>
            <div className="list">
              {Partners[1].partners.map((Part) => (
                <div className="content" key={Part}>
                  <img src={Part.image} />
                </div>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
        <div className="row bottom_sec">
          {Partners[3] ? (
            <div className="col-md-12">
              <h5 className="type-title">
                <span></span> {Partners[3].title}
                <span></span>
              </h5>
              <div className="list">
                {Partners[3].partners.map((Part) => (
                  <div className="content" key={Part}>
                    <img src={Part.image} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="col-md-12 subsec">
            <div className="row">
              {Partners[4] ? (
                <div className="col-md-4">
                  <h5 className="type-title">
                    <span></span> {Partners[4].title}
                    <span></span>
                  </h5>
                  <div className="list">
                    {Partners[4].partners.map((Part) => (
                      <div className="content" key={Part}>
                        <img src={Part.image} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              {Partners[5] ? (
                <div className="col-md-4">
                  <h5 className="type-title">
                    <span></span> {Partners[5].title}
                    <span></span>
                  </h5>
                  <div className="list">
                    {Partners[5].partners.map((Part) => (
                      <div className="content" key={Part}>
                        <img src={Part.image} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              {Partners[6] ? (
                <div className="col-md-4">
                  <h5 className="type-title">
                    <span></span> {Partners[6].title}
                    <span></span>
                  </h5>
                  <div className="list">
                    {Partners[6].partners.map((Part) => (
                      <div className="content" key={Part}>
                        <img src={Part.image} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              {Partners[8] ? (
                <div className="col-md-4">
                  <h5 className="type-title">
                    <span></span> {Partners[8].title}
                    <span></span>
                  </h5>
                  <div className="list">
                    {Partners[8].partners.map((Part) => (
                      <div className="content" key={Part}>
                        <img src={Part.image} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              {Partners[7] ? (
                <div className="col-md-4">
                  <h5 className="type-title">
                    <span></span> {Partners[7].title}
                    <span></span>
                  </h5>
                  <div className="list">
                    {Partners[7].partners.map((Part) => (
                      <div className="content" key={Part}>
                        <img src={Part.image} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              {Partners[11] ? (
                <div className="col-md-4">
                  <h5 className="type-title">
                    <span></span> {Partners[11].title}
                    <span></span>
                  </h5>
                  <div className="list">
                    {Partners[11].partners.map((Part) => (
                      <div className="content" key={Part}>
                        <img src={Part.image} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}

              {Partners[12] ? (
                <div className="col-md-4">
                  <h5 className="type-title">
                    <span></span> {Partners[12].title}
                    <span></span>
                  </h5>
                  <div className="list">
                    {Partners[12].partners.map((Part) => (
                      <div className="content" key={Part}>
                        <img src={Part.image} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
