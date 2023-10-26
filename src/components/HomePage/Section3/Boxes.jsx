export default function Boxes() {
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
    
    const boxInfoList = [
        {
            title: "Business Advice", text: text
        },
        {
            title: "Startup Business", text: text
        },
        {
            title: "Financial Advice", text: text
        },
        {
            title: "Risk Management", text: text
        }
    ];

    return(
        boxInfoList.map((boxInfo, index) =>
        <div key={index} className="wrapper-item">
            <div className="box-line"></div>
            <h3>{boxInfo.title}</h3>
            <p>{boxInfo.text}</p>
            <button className="button-black"><i className="fa-solid fa-arrow-right"></i><p>Read More</p></button>
        </div>
        )
    )
}