import { Outlet } from "react-router-dom";
import {Navbar} from "../src/components/Navbar/Navbar"

function Layout(){
   
return <div className="flex">
            <Navbar/>
            <Outlet/>
        </div>;

}
export default Layout;