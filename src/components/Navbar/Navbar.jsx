import { PiNotePencilBold } from "react-icons/pi";
import pencil from "../../assets/pencil.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
function Navbar(){
const [showNav,setShowNav]=useState(false);

   
    return<>
    {/* mobilde */}
    <button className="dark:text-white mt-6 md:hidden absolute" onClick={(e)=>setShowNav((c)=>!c)} ><GiHamburgerMenu size={30}/></button>

   {showNav && <div className="dark:bg-slate-800 dark:text-white flex flex-col items-center h-[100vh] w-[60vw] bg-white md:hidden absolute">
   <button
   onClick={(e)=>setShowNav((c)=>!c)}
   className="dark:text-white  self-end mr-2 mt-2 font-normal text-purple-400 w-[100px] h-[40px] flex items-center justify-around">close 
   <IoClose
   size={30}/>
   </button>
   <Link
    onClick={(e)=>setShowNav((c)=>!c)}
   className="w-[100%]" to="/">
        <div className="navbarGradient mt-[40px] cursor-pointer flex flex-row justify-around items-center w-[100%] h-[80px] dark:darkNav">
            <img className="w-[33.58px] h-[32px] shadow-sm" src={pencil} alt="pencilimage"/>
            <h2 className="dark:text-white w-[89px] h-[23px] size-5 font-normal text-left leading-[22.98px] text-[#000000] font-UB">New Chat</h2>
        <PiNotePencilBold className=" w-6 h-6"/>
        </div>
        </Link> 
        <Link to="history" className="w-[90%]">
    <button 
    onClick={(e)=>setShowNav((c)=>!c)}
    className=" mt-4  font-UB font-bold text-center navbarGradient w-[100%] h-[39px] rounded-[10px] dark:darkNav">Past Conversion</button>
    </Link>
    </div>}
    <div className="dark:text-white dark:bg-slate-800 hidden md:flex flex-col items-center min-h-screen w-[208px] ">
        {/*  */}
       <Link className="w-[100%]" to="/">
        <div className="mt-5 dark:darkNav cursor-pointer flex flex-row justify-around items-center w-[100%] h-[47px] navbarGradient">
            <img className="w-[33.58px] h-[32px] shadow-sm" src={pencil} alt="pencilimage"/>
            <h2 className="dark:text-white w-[89px] h-[23px] size-5 font-normal text-left leading-[22.98px] text-[#000000] font-UB">New Chat</h2>
        <PiNotePencilBold className=" w-6 h-6"/>
        </div>
        </Link> 
    <Link to="history">
    <button 
    className="
    dark:darkNav dark:text-white
    mt-4 font-UB font-bold text-center navbarGradient w-[175.16px] h-[39px] rounded-[10px]">Past Conversion</button>
    </Link>
    </div>
    </>
}
export {Navbar}

