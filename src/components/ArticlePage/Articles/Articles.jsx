import { useParams } from "react-router-dom";
import { useData } from "../../Context/DataContext";

import styles from "./articles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Tags from "./tags";
import Container from "../../Global/Container";

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

    function formatDate(dateString) {
        const inputDate = new Date(dateString);
      
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
      
        const formattedDate = `${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}`;
      
        return formattedDate;
    }

    const text = <div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br />
    <br />
    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br />
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br />
    <br />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br />
    <br />
    Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br />
    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
    </p>

    <div className={styles["text-holder"]}><h2><FontAwesomeIcon icon={faQuoteRight} className={styles["quote-icon"]} /></h2><p className={styles["big-text"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p></div>
    
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
    </div>


    return(
        <Container containerClass={styles["articles"]}>
            <h2>{article.title}</h2>
            <div className={styles["data-info"]}>
                <div>{formatDate(article.published)}</div>
                <div><FontAwesomeIcon icon={faCircle} className={styles["circle-icon"]} /></div>
                <div>{article.category}</div>
                <div><FontAwesomeIcon icon={faCircle} className={styles["circle-icon"]} /></div>
                <div>{article.author}</div>
            </div>
            <div className={styles["image-holder"]}><img className={styles["article-img"]} src={article.imageUrl} alt="" /></div>
            <div>{text}</div>
            <div className={styles["tags"]}>
                <Tags />
            </div>
        </Container>
    )   
}