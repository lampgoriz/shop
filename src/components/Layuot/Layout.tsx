import {Navbar} from "../Navbar/Navbar";
import {Outlet} from "react-router";


const Layout = () => {
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export {Layout}