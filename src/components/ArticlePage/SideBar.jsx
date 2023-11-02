import CategoryList from "./CategoryList";
import RecentPosts from "./RecentPosts";

export default function SideBar() {
    return(
        <div>
            <input type="search" />
            <div>
                <h3>Recent Posts</h3>
                <ul>
                    <RecentPosts />
                </ul>
            </div>
            <div>
                <h3>Categories</h3>
                <ul>
                    <CategoryList />
                </ul>
            </div>
        </div>
        
    )
}