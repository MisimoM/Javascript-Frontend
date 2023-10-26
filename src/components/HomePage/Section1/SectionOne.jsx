import ThinkingMan from '../../../assets/images/thinkingman.svg';
import BackgroundLines from '../../../assets/images/background-lines.svg';
import Button from '../../Global/Button';
import './sectionOne.css'

export default function SectionOne() {
    return(
        <>
            <section className="section-one">
                <div className="container">
                    <div className="text-holder">
                        <div>
                            <h1>We Provide The Best Business Solutions</h1>
                            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                        </div>
                        <div className="btn-holder">
                            <Button className="button-yellow" title="Get Consulting" />
                            <Button className="button-transparent" title="Learn More" />
                        </div>
                    </div>
                    <figure className="img-holder">
                        <img src={ThinkingMan} alt="Thinking Man" />
                    </figure>
                </div>
                <img className="bg-line" src={BackgroundLines} alt="Background Lines" />
            </section>
        </>
    )
}