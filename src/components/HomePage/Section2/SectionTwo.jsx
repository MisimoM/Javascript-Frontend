import Button from "../../Global/Button";
import Grid from "../../Global/Grid";
import Heading from "../../Global/Heading";
import GridItem from "./GridItem";
import LogoList from "./LogoList";
import SamanthaBrown from "../../../assets/images/samantha-brown.svg";
import "./sectionTwo.css"

export default function SectionTwo() {
    return(
        <>
            <section className="section-two">
                <div className="container">
                    <div className="logo-list">
                        <LogoList />
                    </div>
                    <div class="container-top">
                        <div class="text-holder-top">
                            <Heading p="Why choose us?" H2="Our Accounting is trusted by thousand of companies" />
                            <Button className="button-yellow" title="Learn More" />
                        </div>
                        <Grid>
                            <GridItem />
                        </Grid>
                    </div>
                </div>

                <div class="container-bot">
                    <figure class="img-holder">
                        <img src={SamanthaBrown} alt="Samantha Brown" />
                        <div class="img-text">
                            <h3>Samantha Brown, <span class="orange">Founder</span></h3>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                    </figure>
                    <div class="text-holder-bot">
                        <Heading p="About Company" H2="We Are Business Consulting & Credit Repair Experts" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem vitae, in sunt accusantium eaque aliquid est hic illo.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quos placeat tempore possimus est amet!</p>
                        <div class="btn-holder-bot">
                            <Button className="button-black" title="Learn More" />
                            <button id="btn-right"><i class="fa-solid fa-play"></i><span>Intro Video</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}