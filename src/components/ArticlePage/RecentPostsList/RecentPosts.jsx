import { useData } from "../../Global/DataContext";
import styles from "./recentPosts.module.css";

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
      
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
      
        const formattedDate = `${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}`;
      
        return formattedDate;
    }

    const posts = data.slice(0,4).map((post) =>
        <li key={post.id}>
            <div>
                <h6>{post.title}</h6>
                <p className={styles["date-text"]}>{formatDate(post.published)}</p>
            </div>
        </li>
    )
    
    return(
        <div className={styles["post-holder"]}>
            <ul>
                {posts}
            </ul>
        </div>
    )
}