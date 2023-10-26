import Boxes from "./Boxes";
import BackGroundLinesRight from "../../../assets/images/background-lines-right.svg";
import Button from "../../Global/Button";
import Heading from "../../Global/Heading";
import "./sectionThree.css"

export default function SectionThree(){
    return(
        <section className="section-three">
            <div className="container">
                <Heading p="Our Services" H2="We Provide The Best Service For Consulting" />
                <div className="content-wrapper">
                    <Boxes />
                </div>
                <div className="btn-holder">
                    <Button className="button-transparent" title="Browse Services"/>
                </div>
            </div>
            <div className="bg-line"><img src={BackGroundLinesRight}alt="" /></div>
        </section>
    )
}