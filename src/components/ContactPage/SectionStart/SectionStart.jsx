import backgroundLines from "../../../assets/images/background-lines-right.svg";
import "./sectionStart.css";

export default function SectionStart() {
    return(
        <>
            <section className="section-start">
                <div className="container">
                    <div className="text-holder">
                        <div>
                            <ul>
                                <li><p>Home</p></li>
                                <li><p>Contact</p></li>
                            </ul>
                        </div>
                        <div><h1>Let's connect</h1></div>
                    </div>
                </div>
                <div className="bg-line"><img src={backgroundLines} alt="" /></div>
            </section>
        </>
    )
}