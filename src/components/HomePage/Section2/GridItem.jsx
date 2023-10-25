export default function GridItem() {
    
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

    const gridItemList = [
        {
            icon: "fa-regular fa-handshake", title: "Business Advice", text: text
        },
        {
            icon: "fa-regular fa-lightbulb", title: "Startup Business", text: text
        },
        {
            icon: "fa-solid fa-chart-column", title: "Financial Advice", text: text
        },
        {
            icon: "fa-solid fa-gears", title: "Risk Management", text: text
        }
    ];
    
    return(
        gridItemList.map((gridItem, index) =>
        <div className="grid-item">
            <i className={gridItem.icon}></i>
            <h3>{gridItem.title}</h3>
            <p>{gridItem.text}</p>
        </div>)
    )
}