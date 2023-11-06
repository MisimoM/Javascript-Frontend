import Container from "../../Global/Container";
import Articles from "../Articles/Articles";
import SideBar from "../SideBar";
import "./articleContent.css"

export default function ArticleContent() {

    return(
        <Container sectionClass="article-content">
            <Articles />
            <SideBar />
        </Container>
    )
}