import Container from "../../Global/Container";
import ContactBoxes from "./ContactBoxes";
import MessageForm from "./MessageForm";
import "./sectionForm.css"


export default function SectionForm() {
    return(
        <Container sectionClass="section-forms">
            <div className="wrapper-contact">
                <ContactBoxes />   
            </div>
            <div className="forms-holder">
                <MessageForm />
            </div>
       </Container>
    )
}