import "./button.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Button({className, title, type}) {
    return (
        <button className={className} type={type}>
            {title}
            <FontAwesomeIcon icon={faArrowUp} className={"btn-icon"} />
        </button>
    )
}