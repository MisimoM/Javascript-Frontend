import { useData } from "../../../Context/DataContext";
import styles from "./categoryList.module.css";


export default function CategoryList() {
    
    const {data, loading, error } = useData();
   
    if(loading) {
        return <p>Loading...</p>
    }
 
    if(error) {
        return <p>Error: {error.message}</p>
    }

    const categoryCounter = {};

    data.forEach(item => {
        categoryCounter[item.category] = (categoryCounter[item.category] || 0) + 1;
    });

    const categoryItems = Object.entries(categoryCounter).map(([category, count]) => (
        <li key={category}>
            <h6>{category} - </h6><h6 className={styles["gray-text"]}>{count} Posts</h6>
        </li>
    ))

    
    return(
        <div className={styles["category-holder"]}>
            <ul>
                {categoryItems}
            </ul>
        </div>
    )
}