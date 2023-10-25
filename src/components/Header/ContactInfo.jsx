
export default function ContactInfo() {

    const dataInfo = [
        {
            id: "phone",
            icon: "fa-solid fa-phone-volume",
            info: "+46 (8) 121 470 50"
        },
        {
            id: "email",
            icon: "fa-solid fa-envelope",
            info: "info@crito.com"
        },
        {
            id: "adress",
            icon: "fa-solid fa-location-dot",
            info: "Sveavägen 31, 11134 Stockholm"
        }
    ];

    const contactInfo = dataInfo.map((info) => <li id={info.id} key={info.id}><i className={info.icon} />{info.info}</li>); 

    return(
        <>
            <div>
                <ul>
                    {contactInfo}
                </ul>
            </div>
        </>
    )
}