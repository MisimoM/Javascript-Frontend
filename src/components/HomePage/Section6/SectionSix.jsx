import Button from "../../Global/Button";
import ArticleBoxes from "./ArticleBoxes";
import dot from "../../../assets/images/dot.svg";
import "./sectionSix.css";

export default function SectionSix() {
    return(
        <section className="section-six">
            <div className="container">
                <p className="orange">Article & News</p>
                <div className="heading-wrap">
                    <h2>Get Every Single Articles & News</h2>
                    <Button className="button-transparent" title="Browse Articles" />
                </div>
                <div className="wrapper">
                    <ArticleBoxes />
                </div>
                <div className="dot-holder"><img src={dot} alt="" /></div>
            </div>
        </section>
    )
}