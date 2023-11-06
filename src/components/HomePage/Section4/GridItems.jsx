import gridImgOne from "../../../assets/images/grid-img-one.svg";
import gridImgTwo from "../../../assets/images/grid-img-two.svg";
import gridImgThree from "../../../assets/images/grid-img-three.svg";
import gridImgFour from "../../../assets/images/grid-img-four.svg";
import Button from "../../Global/Button/Button";

export default function GridItems() {

    const gridItemList = [
        {
            src: gridImgOne, title: "Grow your business"
        },
        {
            src: gridImgTwo, title: "Why your client needs a responsive website"
        },
        {
            src: gridImgThree, title: "Educate your employees to get better results"
        },
        {
            src: gridImgFour, title: "Business Insights is a important piece of your business"
        }
    ];

   
    return(
        gridItemList.map((gridItem, index) =>
            <a href="#" key={index}>
                <div className="grid-item">
                    <div>
                        <div className="grid-img-holder">
                            <img src={gridItem.src} alt="" />
                        </div>
                        <h3>{gridItem.title}</h3>
                    </div>
                    <Button title="Read More" />
                </div>
            </a>
        )
    )
}