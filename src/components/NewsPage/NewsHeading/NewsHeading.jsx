import backgroundLines from "../../../assets/images/background-lines-right.svg";
import Container from "../../Global/Container";
import "./newsHeading.css";

export default function NewsHeading() {
    return(
        <Container sectionClass="news-heading" imageClass="bg-line" image={backgroundLines}>
            <div className="text-holder">
                <div>
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>News</p></li>
                    </ul>
                </div>
                <div><h1>News & Articles</h1></div>
            </div>
        </Container>
    )
}