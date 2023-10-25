export default function SocialMedia() {
    
    const SocialMediaList = [
        "fa-brands fa-square-facebook",
        "fa-brands fa-x-twitter",
        "fa-brands fa-instagram",
        "fa-brands fa-linkedin"
    ]

    const links = SocialMediaList.map((link, index) => <li key={index}><a href="#"><i className={link} /></a></li>);
    
    return(
        <>
            <div className="social-media-header">
                <ul>
                    {links}
                </ul>
            </div>
        </>
    )
}