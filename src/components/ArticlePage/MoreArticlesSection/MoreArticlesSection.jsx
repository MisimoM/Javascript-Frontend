import "./moreArticlesSection.css";
import dot from "../../../assets/images/dot.svg"
import Container from "../../Global/Container";
import Heading from "../../Global/Heading";
import Button from "../../Global/Button/Button";
import ArticleBoxes from "../../Global/ArticleBoxes/ArticleBoxes";

export default function MoreArticlesSection() {
    return(
        <Container sectionClass="more-articles-section">
            <Heading option="withButton" path="/news" p="Article & News" H2="Get Every Single Articles & News">
                <Button className="button-transparent" title="Browse Articles" />
            </Heading>
            <ArticleBoxes number={3} img={dot} />
        </Container>
    )
}