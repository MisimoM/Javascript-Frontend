import { useParams } from "react-router-dom";
import { useData } from "../../Global/DataContext";

export default function Articles() {
   const { id } = useParams();

   const {data, loading, error } = useData();
   
   if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error.message}</p>
    }

    const article = data.find(article => article.id === id);

    if (!article) {
        return <p>Article not found</p>;
    }


    return(
        
        <>
            <h2>{article.title}</h2>
            <div className="data-info">
                <div>{article.published}</div>
                <div>|</div>
                <div>{article.category}</div>
                <div>|</div>
                <div>{article.author}</div>
            </div>
            <div><img src={article.imageUrl} alt="" /></div>
            <div>Lots of Lorem</div>
            <div><img src="" alt="" /></div>
        </>
    )
     
}