import React from "react";
import '../HomePage.css';

export default function HomePage() {
  return (
    <div>
      <div className="sect sect--padding-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site">
                <h1 className="site__title">
                  Fast paced way to grow your business
                </h1>
                <h2 className="site__subtitle">Manage analytics like a boss</h2>
                <div className="site__box-link">
                  <a className="btn btn--width" href="">
                    Pricing
                  </a>
                  <a className="btn btn--revert btn--width" href="">
                    Contact
                  </a>
                </div>
                <img
                  className="site__img"
                  src="https://image.ibb.co/c7grYb/image3015.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
