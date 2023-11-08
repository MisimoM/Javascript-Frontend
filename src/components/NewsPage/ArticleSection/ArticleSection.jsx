import pagination from "../../../assets/images/Pagination.svg";
import ArticleBoxes from "../../Global/ArticleBoxes/ArticleBoxes";
import Container from "../../Global/Container";

export default function ArticleSection() {
    return(
        <Container sectionClass="article-section">
            <h2>Our News & Articles</h2>
            <ArticleBoxes img={pagination} />
        </Container>
    )
}