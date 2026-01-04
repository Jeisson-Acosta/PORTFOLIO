import { Outlet } from "react-router-dom";
import { HeaderApp } from "./HeaderApp";
import { Footer } from "./Footer";

export default function Layout() {
    return (
        <>
            <HeaderApp />
            <Outlet />
            <Footer />
        </>
    )
}