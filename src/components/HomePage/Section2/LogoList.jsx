import paperz from '../../../assets/images/paperz.svg';
import dorfus from '../../../assets/images/dorfus.svg';
import martino from '../../../assets/images/martino.svg';
import square from '../../../assets/images/square.svg';
import gobona from '../../../assets/images/gobona.svg';

export default function LogoList() {
    const logos = [
        paperz, dorfus, martino, square, gobona
    ];

    const logoList = logos.map((logo, index) => <li key={index}><img src={logo} /></li>);

    return (
        <ul>
            {logoList}
        </ul>
    )
}