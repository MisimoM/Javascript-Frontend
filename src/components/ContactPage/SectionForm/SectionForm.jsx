import ContactBoxes from "./ContactBoxes";
import MessageForm from "./MessageForm";
import "./sectionForm.css"


export default function SectionForm() {
    return(
        <section className="section-forms">
            <div className="container">
                <div className="wrapper-contact">
                    <ContactBoxes />   
                </div>
                <div className="forms-holder">
                    <MessageForm />
                </div>
            </div>
        </section>
    )
}