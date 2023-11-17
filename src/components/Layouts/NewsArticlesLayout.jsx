import { Outlet } from "react-router-dom";
import PageHeading from "../Global/PageHeading/PageHeading";


export default function NewsArticlesLayout() {
    return(
        <>
            <PageHeading title="News & Articles" text="News"/>
            <Outlet />
        </>

    )
}