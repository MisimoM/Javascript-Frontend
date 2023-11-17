export default function Boxes() {
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
    
    const boxInfoList = [ "Business Advice", "Startup Business", "Financial Advice", "Risk Management"];

    return(
        boxInfoList.map((boxInfo, index) =>
        <div key={index} className="wrapper-item">
            <div className="box-line"></div>
            <h3>{boxInfo}</h3>
            <p>{text}</p>
            <button className="button-black"><i className="fa-solid fa-arrow-right"></i><p>Read More</p></button>
        </div>
        )
    )
}