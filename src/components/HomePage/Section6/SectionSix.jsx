import Button from "../../Global/Button";
import dot from "../../../assets/images/dot.svg";
import "./sectionSix.css";
import ArticleBoxesNew from "../../Global/ArticleBoxes/ArticleBoxesNew";
import { NavLink } from "react-router-dom";

export default function SectionSix() {
    return(
        <section className="section-six">
            <div className="container">
                <p className="orange">Article & News</p>
                <div className="heading-wrap">
                    <h2>Articles & News</h2>
                    <NavLink to={"/news"}><Button className="button-transparent" title="Browse Articles" /></NavLink>
                </div>
                <div className="wrapper">
                    <ArticleBoxesNew number={3} />
                </div>
                <div className="dot-holder"><img src={dot} alt="" /></div>
            </div>
        </section>
    )
}