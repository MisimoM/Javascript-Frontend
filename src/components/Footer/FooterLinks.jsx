export default function FooterLinks() {
    
    const linkList = [
        {heading: "Company", links: ["About", "Features", "Works", "Career"]},
        {heading: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]},
        {heading: "Resources", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]},
        {heading: "Links", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]}
    ]
    

    return(
        linkList.map((link, index) =>
        <ul key={index}>
            <li key={index}><h3>{link.heading}</h3></li>
            {link.links.map((allLinks, index) =>
            <li key={index}><a href="#">{allLinks}</a></li>
            )}
        </ul>
        )
    )
}