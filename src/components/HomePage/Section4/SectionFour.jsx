import GridItems from "./GridItems";
import TextItem from "./TextItem";
import WomenDesk from "../../../assets/images/womendesk.svg";
import Button from "../../Global/Button/Button";
import Grid from "../../Global/Grid";
import Heading from "../../Global/Heading";
import "./sectionFour.css"
import Container from "../../Global/Container";


export default function SectionFour() {
    return(
        <Container sectionClass="section-four" showDiv={true}>
            
            <Container containerClass="container-top">
                <div className="text-holder">
                    <Heading option="regular" p="Why Choose us" H2="Why We Are The Best Business Consulting Agency" />
                    <TextItem />
                </div>
                <div className="img-holder">
                    <img src={WomenDesk} alt="" />
                </div>
            </Container>

            <Container containerClass="container-bot">
                <Heading option="regular" p="Project & Case Studies" H2="Let's Look Our Global Projects" />
                <Grid className="grid">
                    <GridItems />
                </Grid>
                <div className="btn-holder">
                    <Button className="button-black" title="All Recent Projects" />
                </div>
            </Container>

        </Container>
    )
}