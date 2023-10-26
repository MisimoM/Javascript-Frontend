export default function TextItem() {
    const text = "Lorem ipsum dolor sit amet consectetur.";
    
    const textItemList = [
        {
            icon: "fa-solid fa-thumbs-up", title: "Process Excellence", text: text
        },
        {
            icon: "fa-solid fa-arrows-to-circle", title: "Strategic Planning", text: text
        },
        {
            icon: "fa-solid fa-pen-to-square", title: "Experience Design", text: text
        },
        {
            icon: "fa-solid fa-robot", title: "Artificial Inteligence", text: text
        }
    ];

    const textItems = textItemList.map((textItem, index) =>
    <li key={index}>
        <div className="wrapper">
            <div><i className={textItem.icon} /></div>
            <div className="wrapper-item">
                <h3>{textItem.title}</h3>
                <p>{textItem.text}</p>
            </div>
        </div>
    </li>
    )
    
    return(
        <div>
            <div>
                <ul>
                    {textItems}
                </ul>
            </div>
        </div>
    )
}