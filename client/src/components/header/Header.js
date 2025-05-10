import "./Header.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SignInCreateAccountButton from "./SignInCreateAccountButton";
import HamburgerMenu from "./HamburgerMenu";

/**
 * Header Component
 * 
 * This component is the container for the entire header.
 * This components imports the following:
 * - Logo.js
 * - Navigation.js
 * - SignInCreateAccountButton.js
 * - HamburgerMenu.js
 * 
 * - The indvidual styling for each of the componetns listed are within their own style sheet
 * (ex: Logo.css, Navigation.css). The styling for the header container and positioning of the * imported componets are within the Header.css. 
 * 
 *  Styling reqiured to hide the Navigation and SignInCreateAccountButton for mobile view 
 *  is located in Header.css
 */

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Logo />
        <div className="header-navigation-container header-navigation-container-desktop-only-view">
          <Navigation />
        </div>
        <div className="header-signincreateaccountbutton-container header-signincreateaccountbutton-container-desktop-only-view">
          <SignInCreateAccountButton />
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};
export default Header;
