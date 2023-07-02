import React from 'react';
import '../sidebar.css';
export default function SideBar() {
    const toggleHandler = () =>{
        const navbar = window.document.querySelector(".navbar");
        navbar.classList.toggle('active');
    }
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sidebar</title>
  {/*fonts*/}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap"
    rel="stylesheet"
  />
  {/*css
  <link rel="stylesheet" href="./assets/styles/style.css">*/}
  <link rel="stylesheet" href="style.css" />
  {/*js
   */}
  {/*fontawesome*/}
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v6.3.0/css/all.css"
  />
  {/*aside bar*/}
  <nav className="navbar">
    <div className="navbar-container">
      {/*logo div*/}
      <div className="navbar-logo-div">
        <a className="navbar-logo-link" href="#">
          <i className="fas fa-shield-dog" />
        </a>
        <button className="navbar-toggler" onClick={toggleHandler}>
          <i className="fas fa-solid fa-bars" />
        </button>
      </div>
      {/* search input
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="navbar-search"
        id="search"
      />
      <i id="icon-search" className="fas fa-regular fa-magnifying-glass" /> */}
      {/*item list*/}
      <ul className="menu-list">
        <li className="menu-item">
          <a className="menu-link" href="#">
            <i className="fas fa-solid fa-table" />
            <span className="menu-link-text">Dashboard</span>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <i className="fas fa-solid fa-paw" />
            <span className="menu-link-text">Pets</span>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <i className="fas fa-solid fa-user" />
            <span className="menu-link-text">Customers</span>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <i className="fas fa-regular fa-stethoscope" />
            <span className="menu-link-text">Vets</span>
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            <i className="fas fa-duotone fa-gear" />
            <span className="menu-link-text">Settings</span>
          </a>
        </li>
      </ul>
    </div>
    {/*div user info*/}
    <div className="user-container">
      <div className="user-info">
        <i className="fas fa-solid fa-user-secret" />
        <div className="user-details">
          <h3 className="user-name">Eleanor Pena</h3>
          <p className="user-occupation">Veterinary</p>
        </div>
      </div>
      
    </div>
  </nav>
</>

  )
}
