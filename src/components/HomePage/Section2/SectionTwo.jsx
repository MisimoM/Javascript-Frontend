import Button from "../../Global/Button/Button";
import Grid from "../../Global/Grid";
import Heading from "../../Global/Heading";
import GridItem from "./GridItem";
import LogoList from "./LogoList";
import SamanthaBrown from "../../../assets/images/samantha-brown.svg";
import "./sectionTwo.css"
import Container from "../../Global/Container";

export default function SectionTwo() {
    return(
        <Container sectionClass="section-two">
            <div className="logo-list">
                <LogoList />
            </div>

            <Container containerClass="container-top">
                <div className="text-holder-top">
                    <Heading option="regular" p="Features" H2="Our Accounting is trusted by thousand of companies" />
                    <Button className="button-yellow" title="Learn More" />
                </div>
                <Grid className="grid">
                    <GridItem />
                </Grid>
            </Container>
                    
            <Container containerClass="container-bot">
                <figure className="img-holder">
                    <img src={SamanthaBrown} alt="Samantha Brown" />
                    <div className="img-text">
                        <h3>Samantha Brown, <span className="orange">Founder</span></h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </figure>
                <div className="text-holder-bot">
                    <Heading option="regular" p="About Company" H2="We Are Business Consulting & Credit Repair Experts" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem vitae, in sunt accusantium eaque aliquid est hic illo.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quos placeat tempore possimus est amet!</p>
                    <div className="btn-holder-bot">
                        <Button className="button-black" title="Learn More" />
                        <button id="btn-right"><i className="fa-solid fa-play"></i><span>Intro Video</span></button>
                    </div>
                </div>
            </Container>
            
        </Container>            
    )
}