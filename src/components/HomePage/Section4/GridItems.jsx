import gridImgOne from "../../../assets/images/grid-img-one.svg";
import gridImgTwo from "../../../assets/images/grid-img-two.svg";
import gridImgThree from "../../../assets/images/grid-img-three.svg";
import gridImgFour from "../../../assets/images/grid-img-four.svg";

export default function GridItems() {

   const btnTitle = "Read More";
   const btnIcon = "fa-solid fa-arrow-up";
    
    const gridItemList = [
        {
            src: gridImgOne, title: "Grow your business", btnTitle: btnTitle, btnIcon: btnIcon
        },
        {
            src: gridImgTwo, title: "Why your client needs a responsive website", btnTitle: btnTitle, btnIcon: btnIcon
        },
        {
            src: gridImgThree, title: "Educate your employees to get better results", btnTitle: btnTitle, btnIcon: btnIcon
        },
        {
            src: gridImgFour, title: "Business Insights is a important piece of your business", btnTitle: btnTitle, btnIcon: btnIcon
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
                    <button>{gridItem.btnTitle}<i className={gridItem.btnIcon} /></button>
                </div>
            </a>
        )
    )
}