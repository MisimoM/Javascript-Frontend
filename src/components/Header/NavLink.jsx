export default function NavLink() {

    const linkList = [
        "Home",
        "Service",
        "News",
        "Contact"
    ]

    const links = linkList.map((link, index) => <li key={index}><a href="#">{link}</a></li>); 


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