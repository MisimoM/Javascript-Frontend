import MemberOne from "../../../assets/images/kristine-palmer.svg";
import MemberTwo from "../../../assets/images/mark-aubri.svg";
import MemberThree from "../../../assets/images/kimberly-hansen.svg";
import MemberFour from "../../../assets/images/justin-willoman.svg";



export default function TeamMembers() {
    
    const teamMemberList = [
        {
            src: MemberOne, name: "Kristine Palmer", title: "Chef Operation Officer"
        },
        {
            src: MemberTwo, name: "Mark Aubri", title: "Senior Consultant"
        },
        {
            src: MemberThree, name: "Kimberly Hansen", title: "Senior Consultant"
        },
        {
            src: MemberFour, name: "Justin Willoman", title: "Senior Tech Consultant"
        },
    ]

    const teamMembers = teamMemberList.map((member, index) =>
    <li key={index}>
        <div className="wrapper-item-top">
            <img src={member.src} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
        </div>
    </li>
    );

    return(
        <ul>
            {teamMembers}
        </ul>
    )

}