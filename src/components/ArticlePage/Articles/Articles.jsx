import { useParams } from "react-router-dom"
import useFetch from "../../Global/useFetch";

export default function Articles() {
   const { id } = useParams();
   const url = "https://win23-assignment.azurewebsites.net/api/articles/";
   console.log(id);

   const {data, loading, error } = useFetch(url + id);
   console.log(data);
   
   if(loading) {
    return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error.message}</p>
    }


    return(
        
        <>
            <h2>{data.title}</h2>
            <div>
                <div>{data.published}</div>
                <div>{data.category}</div>
                <div>{data.author}</div>
            </div>
            <div><img src={data.imageUrl} alt="" /></div>
            <div>Lots of Lorem</div>
            <div><img src="" alt="" /></div>
        </>
    )
     
}