import { NavLink } from "react-router-dom";
import { useData } from "../../Context/DataContext"
import Grid from "../Grid";
import "./articleBoxes.css";

export default function ArticleBoxes({number, img}) {
    
    const {data, loading, error} = useData();

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

    const boxes = data.slice(0,number).map((article) =>
    <NavLink key={article.id} to={`/news/${article.id}`}>
        <div className="article-boxes">
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
        </div>
    </NavLink>
    )
    
    return(
        <>
            <Grid className="article-grid">
                {boxes}
            </Grid>
            <div className="pagination-holder"><img src={img} alt="" /></div>
        </>
    )
}