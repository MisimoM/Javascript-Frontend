import { useEffect, useState } from "react";
import "./articleBoxes.css";

export default function ArticleBoxesNew() {
    const url = "https://win23-assignment.azurewebsites.net/api/articles";
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(url);
                if(response.status === 200) {
                    console.log(response.status);
                    const data = await response.json();
                    setData(data);
                } else {
                    throw new Error('Request to the API failed');
                }
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };
        fetchArticles()
    }, [url] );

    function getMonth(dateString) {
        const date = new Date(dateString);
        const formatMonth = date.toLocaleDateString("default", {month: "short"});
        const month = formatMonth.charAt(0).toUpperCase() + formatMonth.slice(1).replace(/\./g, '');

        return month;
    };

    function getDay (dateString) {
        const date = new Date(dateString)
        const day = date.getDate();

        return day;
    }
    
    return( data === null ? <p>Loading...</p> :
        data.map((article) =>
            <a href="#" key={article.id}>
                <div className="wrapper-item">
                    <div className="wrapper-img">
                        <img src={article.imageUrl} />
                    </div>
                    <div className="item-box">
                        <b>{getMonth(article.published)}</b>
                        <p>{getDay(article.published)}</p>
                    </div>
                    <div>
                        <span><p>{article.category}</p></span>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                </div>
            </a>
        )
        
    )
}