import "./HeroSection.css";

/**
 * HeroSection component
 *
 * This component renders a hero section at the top of the page.
 * It includes:
 * - A headline describing the serivce.
 * - A short paragraph explaining the key benefits.
 * - A call-to-action button ("Get Started").
 * - A background image that complements the theme.
 *
 * The section is styled to overlay the text and button on top of the image
 */

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="text-over-image">
        <h1>
          All-in-One Portal for <br />
          Tenants and Landlords
        </h1>

        <p>
          Securely access lease documents, pay rent online, and manage
          maintenance requests—all in one place.
        </p>

        <button className="get-started-button">Get Started</button>

        <img src="/images/hero-image.jpg" alt="" className="home-building" />
      </div>
    </div>
  );
};
export default HeroSection;
