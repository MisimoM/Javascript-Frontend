import Button from "../../Global/Button";
import TeamMembers from "./TeamMembers";

import dot from "../../../assets/images/dot.svg";
import Heading from "../../Global/Heading";
import ClientBoxes from "./ClientBoxes";

import "./sectionFive.css"

export default function SectionFive() {
    return(
        <section className="section-five">
            <div className="container">
                <div className="container-top">
                    <p className="orange">Meet Our Team</p>
                    <div className="heading-wrap">
                        <h2>Experience Team Members</h2>
                        <Button className="button-transparent" title="Browse Team" />
                    </div>
                    <div className="wrapper-top">
                        <TeamMembers />
                    </div>
                </div>
                <div className="dot-holder"><img src={dot} alt="" /></div>

                <div className="container-bot">
                    <div className="text-holder">
                        <Heading p="Testimonial" H2="What Our Client Says" />
                    </div>
                    <div className="wrapper-bot">
                        <ClientBoxes />
                    </div>
                    <div className="btn-holder-bot">
                        <Button className="button-black" title="All Reviews" />
                    </div>
                </div>
            </div>
        </section>
    )
}