import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SectionForm from "./SectionForm/SectionForm";
import SectionMap from "./SectionMap/SectionMap";
import SectionStart from "./SectionStart/SectionStart";

export default function ContactPage() {
    return(
        <>
            <Header />
            <SectionStart />
            <SectionForm />
            <SectionMap />
            <Footer />
        </>
    )
}