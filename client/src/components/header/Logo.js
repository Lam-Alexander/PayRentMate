import "./Logo.css";

/**
 * Logo Component (Desktop & Mobile view)
 * 
 * This component renders the Logo image within Header at the top of the page for both the desktop and mobile view.
 * It includes: 
 * - A image that is taken from the image folder within public > images.
 * 
 * The section is style so that it fit within the Header container using Logo.css 
 *
 */
const Logo = () => {
  return (
    <div header-logo-wrapper>
      <a href="/">
        <img
          src="/images/logo.png"
          alt="payRentMage Logo"
          className="header-logo"
        />
      </a>
    </div>
  );
};
export default Logo;
