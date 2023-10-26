import logoFooter from "../../assets/images/Logotype-footer.svg";
import backgroundLline from "../../assets/images/background-lines-white-right.svg";
import SocialMedia from "../Global/SocialMedia";
import FooterLinks from "./FooterLinks";
import "./footer.css";

export default function Footer() {
    return(
        <footer>
        <div className="container-fluid">
            <div className="container content-container">
                <div className="img-holder">
                    <img src={logoFooter} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="wrapper">
                    <FooterLinks />
                </div>
            </div>
            <div className= "bg-line"><img src={backgroundLline} alt="" /></div> 
        </div>
        <div className="container-fluid top-border">
            <div className="container bottom-wrapper">
                <div className="wrapper-item-text"><p>2023 Crito - Consulting Company Inc. All Rights Reserved</p></div>
                <SocialMedia className="wrapper-item-link" />
            </div>
        </div>
    </footer>
    )
}