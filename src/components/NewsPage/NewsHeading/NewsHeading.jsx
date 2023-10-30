import backgroundLines from "../../../assets/images/background-lines-right.svg";
import "./newsHeading.css";

export default function NewsHeading() {
    return(
        <>
            <section className="news-heading">
                <div className="container">
                    <div className="text-holder">
                        <div>
                            <ul>
                                <li><p>Home</p></li>
                                <li><p>News</p></li>
                            </ul>
                        </div>
                        <div><h1>News & Articles</h1></div>
                    </div>
                </div>
                <div className="bg-line"><img src={backgroundLines} alt="" /></div>
            </section>
        </>
    )
}