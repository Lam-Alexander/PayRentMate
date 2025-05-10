import { useState } from "react";
import "./HamburgerMenu.css";

/**
 * HamburgerMenu Component
 * 
 * This component is responsible for a drop-down menu to display the Navigation and Sign In 
 * and Create Account button.
 * 
 * This component doesn't reuse the Navigation and SignInCreateAccountButton as the styling
 * doesn't fit within the drop-down menu mobile view. Hard-coded components.
 * 
 * The component takes advantage of useState to hide and display the drop-down menu via the hamburger menu button.
 * The display of the hamburger menu is handled within the HamburgerMenu.css, which is initially set to "display: none"
 * and "display: flex" within the media query.
 * 
 * All styling for the HamburgerMenu is handled within HamburgerMenu.css.
 */


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
