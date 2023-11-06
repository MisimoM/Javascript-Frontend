import Boxes from "./Boxes";
import BackGroundLinesRight from "../../../assets/images/background-lines-right.svg";
import Button from "../../Global/Button/Button";
import Heading from "../../Global/Heading";
import "./sectionThree.css"
import Container from "../../Global/Container";

export default function SectionThree(){
    return(
        <Container sectionClass="section-three" imageClass="bg-line" image={BackGroundLinesRight}>
            <Heading option="regular" p="Our Services" H2="We Provide The Best Service For Consulting" />
                <div className="content-wrapper">
                    <Boxes />
                </div>
                <div className="btn-holder">
                    <Button className="button-transparent" title="Browse Services"/>
                </div>
        </Container>
    )
}