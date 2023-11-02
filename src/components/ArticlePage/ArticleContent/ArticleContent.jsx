import Articles from "../Articles/Articles";
import SideBar from "../SideBar";
import "./articleContent.css"

export default function ArticleContent() {

    return(
        <section className="article-content">
            <div className="container">
                <div>
                <Articles />
                </div>
                <div>
                <SideBar />
                </div>
            </div>
        </section>
    )
}