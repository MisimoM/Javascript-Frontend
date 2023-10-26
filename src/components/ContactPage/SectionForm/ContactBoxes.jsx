export default function ContactBoxes() {
    
    const contactBoxList = [
        {
            icon: "fa-solid fa-location-dot", title: "Visit us", textTop: "Sveavägen 31", textBot: "111 34 Stockholm"
        },
        {
            icon: "fa-solid fa-phone", title: "Call us", textTop: "+46 (8) 121 470 50", textBot: "+46 (8) 121 470 51"
        },
        {
            icon: "fa-solid fa-envelope", title: "Email us", textTop: "info@crito.com", textBot: "support@crito.com"
        }
    ];
    
    return(
        contactBoxList.map((contact, index) =>
            <div className="item-wrapper">
                <div className="icon-holder">
                    <div>
                        <i className={contact.icon} />
                    </div>
                </div>
                <div className="text-holder">
                    <h3>{contact.title}</h3>
                    <p>{contact.textTop}</p>
                    <p>{contact.textBot}</p>
                </div>
            </div>
        )
    )
}