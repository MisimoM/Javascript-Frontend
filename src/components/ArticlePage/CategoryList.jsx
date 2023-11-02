import { useData } from "../Global/DataContext";


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

    
    return Object.entries(categoryCounter).map(([category, count]) => (
        <li key={category}>
            <p>{category}</p><p> - {count}</p>
        </li>
        
    ))
}