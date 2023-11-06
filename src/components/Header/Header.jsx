import NavBar from "./NavBar";
import "./header.css";
import logo from "../../assets/images/Logotype.svg";
import ContactInfo from "./ContactInfo";
import SocialMedia from "../Global/SocialMedia";
import NavigationLink from "./NavigationLink";
import Button from "../Global/Button/Button";

export default function Header() {


    return(
        <header>
            <div className="container">
                <div className="header-container">
                    <div><img src={logo} alt="logo" /></div>
                    <div  className="menu-bar-container">
                        <NavBar className="menu-bar-top"><ContactInfo /><SocialMedia className="social-media-header" /></NavBar>
                        <NavBar className="menu-bar-bot"><NavigationLink /><Button className="button-yellow" title="Login" /></NavBar>
                    </div>
                </div>
            </div>
        </header>
    )
}