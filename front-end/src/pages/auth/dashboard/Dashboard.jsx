import { Outlet } from "react-router-dom";
import { MiniFooter } from "../components/mini-footer/MiniFooter";

export function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet/>
            <MiniFooter/>
        </div>
    )
}