import thinkingMan from '../../../assets/images/thinkingman.svg';
import backgroundLines from '../../../assets/images/background-lines.svg';
import Container from "../../Global/Container";
import Button from "../../Global/Button/Button";
import "./sectionOne.css";

export default function SectionOne() {
    return(
        <Container sectionClass="section-one" imageClass="bg-line" image={backgroundLines}>
            <div className="text-holder">
                <div>
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                </div>
                <div className="btn-holder">
                    <Button className="button-yellow" title="Get Consulting" />
                    <Button className="button-transparent" title="Learn More" />
                </div>
            </div>
                <figure className="img-holder">
                    <img src={thinkingMan} alt="Thinking Man" />
                </figure>
        </Container>
    )
}