import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function MainLayout() {
    return (
        <div className="container py-9 flex  gap-9">
            <Navbar />
            <main className="w-[90%] h-full shrink-0 ">
                <Search />
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
