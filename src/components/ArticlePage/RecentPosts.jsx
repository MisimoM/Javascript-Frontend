import { useData } from "../Global/DataContext";

export default function RecentPosts() {
    
    const {data, loading, error } = useData();
   
    if(loading) {
        return <p>Loading...</p>
    }
 
     if(error) {
        return <p>Error: {error.message}</p>
    }

    function formatDate(dateString) {
        const inputDate = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const formattedDate = inputDate.toLocaleDateString(undefined, options);
        return formattedDate;
    }
    
    return(
        data.slice(0,4).map((post) =>
            <li key={post.id}>
                <div>
                    <h6>{post.title}</h6>
                    <p>{formatDate(post.published)}</p>
                </div>
            </li>
        )
    )
}