import "./SignInCreateAccountButton.css";

/**
 * SignIn and Create Account Button Component (Desktop View Only)
 *
 * This componet renders the sign in and create account button for desktop view within the Header.js component.
 * It includes:
 * - A button for the sign in.
 * - A button for the Create Account
 *
 * This section is styled so that it fits within the Header container using the SignInCreateAccountButton.css
 */

const SignInCreateAccountButton = () => {
  return (
    <div className="SignInCreateAccountButton-container">
      <button className="header-signin-button">Sign In</button>
      <button className="header-create-account-button">Create account</button>
    </div>
  );
};
export default SignInCreateAccountButton;
