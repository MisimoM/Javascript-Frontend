import RecentPosts from './RecentPostsList/RecentPosts';
import CategoryList from './CategoryList/CategoryList';

import styles from "./sideBar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function SideBar() {
    return(
        <div className={styles["sidebar"]}>
            <div className={styles["input-holder"]}>
                <button className={styles["input-button"]}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                <input type="search" placeholder="Type to search..." />
            </div>
            <div className={styles["side-container"]}>
                <h3 className={styles["heading"]}><span>Rece</span>nt Posts</h3>
                <RecentPosts />
            </div>
            <div className={styles["side-container"]}>
                <h3 className={styles["heading"]}><span>Cate</span>gories</h3>
                <CategoryList />
            </div>
        </div>
        
    )
}