import React from "react";
import "../AdvancedSection.css";

export default function AdvancedSection() {
  return (
    <>
      <div className="more-features">
        <div className="section-header">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="more-features-content">
          <div className="feature">
            <div className="feature-illustration">
              <img
                src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg"
                alt="Feature Illustration Icon"
              />
            </div>
            <div className="feature-details">
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-illustration">
              <img
                src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg"
                alt="Feature Illustration Icon"
              />
            </div>
            <div className="feature-details">
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-illustration">
              <img
                src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg"
                alt="Feature Illustration Icon"
              />
            </div>
            <div className="feature-details">
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
