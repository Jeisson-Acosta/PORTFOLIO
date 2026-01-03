import { Outlet } from "react-router-dom";
import { HeaderApp } from "./HeaderApp";

export default function Layout() {
    return (
        <>
            <HeaderApp />
            <Outlet />
        </>
    )
}