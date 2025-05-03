import "./Header.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
    return (
        <header>
            
            <div className="sticky">    
                <div className="header-container"> 
                    <Logo/>
                    <Navigation/>
                    <Button/>
                    <HamburgerMenu/> 
                </div>
            </div>
        </header>
    )
};
export default Header;