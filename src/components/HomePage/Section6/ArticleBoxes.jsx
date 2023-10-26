import articleImgOne from "../../../assets/images/sect-six-item-one.svg";
import articleImgTwo from "../../../assets/images/sect-six-item-two.svg";
import articleImgThree from "../../../assets/images/sect-six-item-three.svg";


export default function ArticleBoxes() {
    
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.";
    const month = "Mar";
    const business = "Business"


    const articleList = [
        {
            img: articleImgOne, day: "25",  month: month, smallText: business, title: "How To Use Digitalization In The Classroom", text:text
        },
        {
            img: articleImgTwo, day: "17",  month: month, smallText: business, title: "How To Implement Chat GPT In Your Projects", text:text
        },
        {
            img: articleImgThree, day: "13",  month: month, smallText: business, title: "The Guide To Support Modern CSS Design", text:text
        }
    ];


    
    return(
        articleList.map((article, index) =>
            <a href="#" key={index}>
                <div className="wrapper-item">
                    <div className="wrapper-img">
                        <img src={article.img} />
                    </div>
                    <div className="item-box">
                        <b>{article.day}</b>
                        <p>{article.month}</p>
                    </div>
                    <span><p>{article.smallText}</p></span>
                    <h3>{article.title}</h3>
                    <p>{article.text}</p>
                </div>
            </a>
        )
    )
}