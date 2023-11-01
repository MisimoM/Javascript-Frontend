import ScrollToTop from "../Global/ScrollToTop";
import SectionOne from "./Section1/SectionOne";
import SectionTwo from "./Section2/SectionTwo";
import SectionThree from "./Section3/SectionThree";
import SectionFour from "./Section4/SectionFour";
import SectionFive from "./Section5/SectionFive";
import SectionSix from "./Section6/SectionSix";
import SectionSeven from "./Section7/SectionSeven";

export default function HomePage () {
    return (
        <>
            <ScrollToTop />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </>
    )
}