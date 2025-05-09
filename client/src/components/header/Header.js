import "./Header.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SignInCreateAccountButton from "./SignInCreateAccountButton";
import HamburgerMenu from "./HamburgerMenu";

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
