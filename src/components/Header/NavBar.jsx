import Button from "../Global/Button";
import SocialMedia from "../Global/SocialMedia";
import ContactInfo from "./ContactInfo";
import NavLink from "./NavLink";


export default function NavBar({className, children}) {
    return(
        <nav className={className}>
            {children}
        </nav>
    )
}