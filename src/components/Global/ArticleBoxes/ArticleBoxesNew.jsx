import { NavLink } from "react-router-dom";
import useFetch from "../useFetch";
import "./articleBoxes.css";

export default function ArticleBoxesNew({number}) {
    const url = "https://win23-assignment.azurewebsites.net/api/articles";
    
    const {data, loading, error} = useFetch(url);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error.message}</p>
    }

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
    };
    
    return(
        data.slice(0,number).map((article) =>
            <NavLink to={article.id.toString()} key={article.id}>
                <div className="wrapper-item">
                    <div className="wrapper-img">
                        <img src={article.imageUrl} />
                    </div>
                    <div className="item-box">
                        <b>{getDay(article.published)}</b>
                        <p>{getMonth(article.published)}</p>
                    </div>
                    <div>
                        <span><p>{article.category}</p></span>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                </div>
            </NavLink>
        )
    )
}