import Button from "../../Global/Button/Button";
import dot from "../../../assets/images/dot.svg";
import "./sectionSix.css";
import ArticleBoxes from "../../Global/ArticleBoxes/ArticleBoxes";
import Container from "../../Global/Container";
import Heading from "../../Global/Heading";

export default function SectionSix() {
    return(
        <Container sectionClass="section-six">
            <Heading option="withButton" path="/news" p="Article & News" H2="Get Every Single Articles & News">
                <Button className="button-transparent" title="Browse Articles" />
            </Heading>
            <ArticleBoxes number={3} img={dot} />
        </Container>
    )
}