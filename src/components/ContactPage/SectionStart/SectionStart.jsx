import backgroundLines from "../../../assets/images/background-lines-right.svg";
import Container from "../../Global/Container";
import "./sectionStart.css";

export default function SectionStart() {
    return(
       <Container sectionClass="section-start" imageClass="bg-line" image={backgroundLines} >
            <div className="text-holder">
                <div>
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>Contact</p></li>
                    </ul>
                </div>
                <div><h1>Let's connect</h1></div>
            </div>
        </Container>
    )
}