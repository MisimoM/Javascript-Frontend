import SubscribeForm from "./SubscribeForm";
import backgroundLine from "../../../assets/images/background-wavy-lines.svg";
import "./sectionSeven.css";

export default function SectionSeven() {
    return(
        <section className="section-seven">
            <div className="container">
                <SubscribeForm />
            </div>
            <div className="bg-line"><img src={backgroundLine} alt="" /></div>
        </section>
    )
}