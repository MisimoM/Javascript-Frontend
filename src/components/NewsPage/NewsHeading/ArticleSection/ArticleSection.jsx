import Grid from "../../../Global/Grid";
import pagination from "../../../../assets/images/Pagination.svg";
import ArticleBoxesNew from "../../../Global//ArticleBoxes/ArticleBoxesNew";
import "./articleSection.css"

export default function ArticleSection() {
    return(
        <section className="article-section">
            <div className="container">
                <h2>Our News & Articles</h2>
                <Grid className={"article-grid"}>
                    <ArticleBoxesNew />
                </Grid>
                <div><img src={pagination} alt="" /></div>
            </div>
        </section>
    )
}