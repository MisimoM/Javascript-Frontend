import GridItems from "./GridItems";
import TextItem from "./TextItem";
import WomenDesk from "../../../assets/images/womendesk.svg";
import Button from "../../Global/Button";
import Grid from "../../Global/Grid";
import Heading from "../../Global/Heading";
import "./sectionFour.css"


export default function SectionFour() {
    return(
        <section className="section-four">
            <div className="container">
                    <div className="container-top">
                        <div className="text-holder">
                            <Heading p="Why Choose us" H2="Why We Are The Best Business Consulting Agency" />
                            <TextItem />
                        </div>
                        <div className="img-holder">
                            <img src={WomenDesk} alt="" />
                        </div>
                    </div>

                <div className="container-bot">
                    <Heading p="Project & Case Studies" H2="Let's Look Our Global Projects" />
                    <Grid className="grid">
                        <GridItems />
                    </Grid>
                    <div className="btn-holder">
                        <Button className="button-black" title="All Recent Projects" />
                    </div>
                </div>
            </div>
            <div className="bg-colour"></div>
        </section>
    )
}