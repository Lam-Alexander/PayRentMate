import "./Navigation.css"

/**
 * Navigation Componet Section (Desktop View Only)
 * 
 * This componet renders the anchor for the header specifically only for  desktop view within the Header.js component.
 * It includes:
 * - A Home page anchor.
 * - A Pricing anchor.
 * - A FAQ's Anchor.
 *  
 * This section is style so that the anchors are within the Header container using the Navigation.css
 */

const Navigation = () => {
    return (
        <div className="navigation-container">
            <a href="/">Home</a>
            <a href="pricing">Pricing</a>
            <a href="#FAQS">FAQS</a>
        </div>
    )
};
export default Navigation;