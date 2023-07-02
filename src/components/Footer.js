import React from 'react'
import '../Footer.css'

export default function Footer() {
  return (
    <>
    <footer className="footer" id="resources">
  <div className="container">
    {/* Website Logo */}
    <div className="logo">
      <a href="#">
        <img
          src= {(require("../assets/synkin-low-resolution-logo-color.png"))}
          alt=""
        />
      </a>
    </div>
    {/* Quick Links */}
    <div className="quick-links">
      <div className="links-group">
        <span>Features</span>
        <div>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
      </div>
      <div className="links-group">
        <span>Resources</span>
        <div>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>
      </div>
      <div className="links-group">
        <span>Company</span>
        <div>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
    {/* Social Media */}
    <div className="social-media">
      <a href="#">
        <img
          src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-facebook.svg"
          alt="Facebook Logo"
        />
      </a>
      <a href="#">
        <img
          src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-twitter.svg"
          alt="Twitter Logo"
        />
      </a>
      <a href="#">
        <img
          src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-pinterest.svg"
          alt="Pinterest Logo"
        />
      </a>
      <a href="#">
        <img
          src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-instagram.svg"
          alt="Instagram Logo"
        />
      </a>
    </div>
  </div>
  {/* Made By */}
  <div className="attribution">
    Coded by <span className="outer-link">Mohamed Sufiyan Gafoor</span>.
    <ul className="social-media">
      <li>
        <a
          href="https://www.codepen.io/FedLover"
          title="go To My Codepen Account"
        >
          <i className="fa-brands fa-codepen icon" />
        </a>
      </li>
      <li>
        <a
          href="https://www.frontendmentor.io/profile/MohamedAridah"
          title="go To My Frontend Mentor Account"
        >
          <img
            src="https://mohamedaridah.github.io/hosted-assets/FEM.png"
            className="image"
            alt=""
          />
        </a>
      </li>
    </ul>
  </div>
</footer>

    </>
  )
}
