import PageHeading from "../Global/PageHeading/PageHeading";
import SectionForm from "./SectionForm/SectionForm";
import SectionMap from "./SectionMap/SectionMap";

export default function ContactPage() {
    return(
        <>
            <PageHeading title="Let's Connect" text="Contact" />
            <SectionForm />
            <SectionMap />
        </>
    )
}