import { NavLink } from "react-router-dom";

export default function NavigationLink() {

    const linkList = [
        { route: "/", page: "Home" },
        { route: "service", page: "Service" },
        { route: "news", page: "News" },
        { route: "contact", page: "Contact"}
    ];

    const links = linkList.map((link, index) => <li key={index}><NavLink to={link.route}>{link.page}</NavLink></li>); 


    return (
        <>
            <div>
                <ul>
                    {links}
                </ul>
            </div>
        </>
    )
}