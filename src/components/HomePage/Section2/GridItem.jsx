export default function GridItem() {
    
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

    const gridItemList = [
        {
            icon: "fa-regular fa-handshake", title: "Business Advice"
        },
        {
            icon: "fa-regular fa-lightbulb", title: "Startup Business"
        },
        {
            icon: "fa-solid fa-chart-column", title: "Financial Advice"
        },
        {
            icon: "fa-solid fa-gears", title: "Risk Management"
        }
    ];
    
    return(
        gridItemList.map((gridItem, index) =>
        <div key={index} className="grid-item">
            <i className={gridItem.icon}></i>
            <h3>{gridItem.title}</h3>
            <p>{text}</p>
        </div>)
    )
}