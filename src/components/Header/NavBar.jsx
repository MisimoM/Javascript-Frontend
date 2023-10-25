import Button from "../Global/Button";
import SocialMedia from "../Global/SocialMedia";
import ContactInfo from "./ContactInfo";
import NavLink from "./NavLink";


export default function NavBar() {
    return(
        <>
            <div className="menu-bar-container">
                <nav className="menu-bar-top">
                    <ContactInfo />
                    <SocialMedia />
                </nav>
                <nav className="menu-bar-bot">
                    <NavLink />
                    <Button className="button-yellow" title="Login" />
                </nav>
            </div>
        </>
    )
}