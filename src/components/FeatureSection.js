import React from "react";
import '../FeatureSection.css'
export default function FeatureSection() {
  return (
    <>
      <header className="header-design">
        <div className="footer-wave" />
      </header>
      <div className="pset">
        <div className="container">
          <div className="row listar-feature-items">
            <div
              className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div className="listar-feature-item listar-feature-has-link">
                <a
                  href="https://codepen.io/uiswarup/full/yLzypyY"
                  target="_blank"
                />
                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border" />
                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <img
                            alt="Businesses"
                            className="listar-image-icon"
                            src="https://cdn-icons.flaticon.com/png/512/6092/premium/6092945.png?token=exp=1644406818~hmac=d55f23757316b783223fbb4a882cead9"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: 0 }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>01</span>
                          Businesses{" "}
                        </span>
                      </div>
                      <div className="listar-feature-item-excerpt">
                        Start publish listings to show everyone the details and
                        goodies of your establishment.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div className="listar-feature-item listar-feature-has-link">
                <a
                  href="https://codepen.io/uiswarup/full/yLzypyY"
                  target="_blank"
                />
                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border" />
                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <img
                            alt="Customers"
                            className="listar-image-icon"
                            src="https://cdn-icons-png.flaticon.com/512/3414/3414151.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: 0 }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>02</span>
                          Customers{" "}
                        </span>
                      </div>
                      <div className="listar-feature-item-excerpt">
                        Easily find interesting places by local experts, save
                        time by checking listing features.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div className="listar-feature-item listar-feature-has-link">
                <a
                  href="https://codepen.io/uiswarup/full/yLzypyY"
                  target="_blank"
                />
                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border" />
                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <img
                            alt="Feedback"
                            className="listar-image-icon"
                            src="https://cdn-icons-png.flaticon.com/512/3412/3412953.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: 0 }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>03</span>
                          Feedback{" "}
                        </span>
                      </div>
                      <div className="listar-feature-item-excerpt">
                        Visitors discuss listings to share experiences, so
                        businesses get reputation consolidated.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
