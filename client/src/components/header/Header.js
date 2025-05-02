import "./Header.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";

const Header = () => {
    return (
        <header>
            <div className="sticky">
                <div className="header-container"> 
                    <Logo/>
                    <Navigation/>
                    <Button/>
                </div>
            </div>
        </header>
    )
};
export default Header;