import { Link, NavLink } from "react-router-dom";
// icon
import { FaTv, FaBookmark } from "react-icons/fa";
import { MdDashboard, MdMovie, MdTheaters } from "react-icons/md";
function Navbar() {
    return (
        <nav className="navbar flex flex-col  gap-10 w-[96px]  py-8 h-[90vh] ">
            <Link to={"/"}>
                <MdMovie className="w-10 h-10 hover activeIcon  fill-[#FC4747]" />
            </Link>
            <NavLink to={"/trending"}>
                <MdDashboard className="w-6 h-6 hover activeIcon iconColor" />
            </NavLink>
            <NavLink to={"/movies"}>
                <MdTheaters className="w-6 h-6 hover activeIcon iconColor " />
            </NavLink>
            <NavLink to={"/tvSeries"}>
                <FaTv className="w-6 h-6 hover activeIcon iconColor" />
            </NavLink>
            <NavLink to={"/bookmarked"} className="mb-auto">
                <FaBookmark className=" w-6 h-6 hover activeIcon iconColor" />
            </NavLink>
            <Link to={"https://github.com/Jamshedjon"} target="blank">
                <img src="./person.svg" alt="" className=" w-12 h-12" />
            </Link>
        </nav>
    );
}

export default Navbar;
