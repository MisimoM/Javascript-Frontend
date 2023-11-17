import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "./ScrollToTop"

export default function RootLayout() {
    return(
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}