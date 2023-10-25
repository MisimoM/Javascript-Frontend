import NavBar from "./NavBar";
import "./header.css";
import logo from "../../assets/images/Logotype.svg"

export default function Header() {


    return(
        <header>
            <div className="container">
                <div className="header-container">
                    <div><img src={logo} alt="logo" /></div>
                    <NavBar></NavBar>
                </div>
            </div>
        </header>
    )
}