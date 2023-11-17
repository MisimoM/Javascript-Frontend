import Container from "../Container";
import backgroundLines from "../../../assets/images/background-lines-right.svg";
import styles from "./pageHeading.module.css";


export default function PageHeading({text, title}) {
    return (
        <Container sectionClass={styles["page-heading"]} imageClass={styles["bg-line"]} image={backgroundLines}>
            <div className={styles["text-holder"]}>
                <div>
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>{text}</p></li>
                    </ul>
                </div>
                <div><h1>{title}</h1></div>
            </div>
        </Container>
    )
}