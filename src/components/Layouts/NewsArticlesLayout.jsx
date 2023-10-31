import { Outlet } from "react-router-dom";
import NewsHeading from "../NewsPage/NewsHeading/NewsHeading";


export default function NewsArticlesLayout() {
    return(
        <>
            <NewsHeading/>
            <Outlet />
        </>

    )
}