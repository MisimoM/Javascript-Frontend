import SubscribeForm from "./SubscribeForm";
import backgroundLine from "../../../assets/images/background-wavy-lines.svg";
import "./sectionSeven.css";
import Container from "../../Global/Container";

export default function SectionSeven() {
    return(
        <Container sectionClass="section-seven" imageClass="bg-line" image={backgroundLine}>
            <SubscribeForm />
        </Container>
    )
}