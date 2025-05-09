import { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger-menu-open-close-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen ? (
        <div className="hamburger-menu-container">
          <a href="#Home" className="hamburger-menu-anchor-tag">
            <div className="hamburger-menu-anchor-container">Home</div>
          </a>
          <a href="#Prcing" className="hamburger-menu-anchor-tag">
            <div className="hamburger-menu-anchor-container">Pricing</div>
          </a>
          <a href="#Faqs" className="hamburger-menu-anchor-tag">
            <div className="hamburger-menu-anchor-container">FAQS</div>
          </a>
          <div className="hamburger-menu-button-container">
            <button className="hamburger-menu-sign-in-button">Sign in</button>

            <button className="hamburger-menu-create-account-button">
              Create Account
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HamburgerMenu;
