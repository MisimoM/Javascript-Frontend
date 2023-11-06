import Button from "../../Global/Button/Button";
import TeamMembers from "./TeamMembers";

import dot from "../../../assets/images/dot.svg";
import Heading from "../../Global/Heading";
import ClientBoxes from "./ClientBoxes";

import "./sectionFive.css"
import Container from "../../Global/Container";

export default function SectionFive() {
    return(
        <Container sectionClass="section-five">

            <Container containerClass="container-top">
                <Heading option="withButton" p="Meet Our Team" H2="Experience Team Members">
                    <Button className="button-transparent" title="Browse Team" />
                </Heading>
                <div className="wrapper-top">
                    <TeamMembers />
                </div>
                <div className="dot-holder"><img src={dot} alt="" /></div>
            </Container>

            <Container containerClass="container-bot">
                <div className="text-holder">
                    <Heading option="regular" p="Testimonial" H2="What Our Client Says" />
                </div>
                <div className="wrapper-bot">
                    <ClientBoxes />
                </div>
                <div className="btn-holder-bot">
                    <Button className="button-black" title="All Reviews" />
                </div>
            </Container>
            
        </Container>
    )
}