import pencil from "../../assets/pencil.png"
import data from "../../aidata/data.json"
import { useEffect, useState } from "react"
import {Answer} from "../../components/Answer/Answer"
import { Question } from "../../components/Question/question";
import { createContext } from "react";
import { json } from "react-router-dom";
import defaultData from "../../aidata/default.json"
const context=createContext();
function Home()
{
    const [objArr,setObj]=useState([]);
    const[firstRender,setFirstRender]=useState(true);
    const value={
        objArr,
        setObj
    }
    const [theme,setTheme]=useState("light");

    useEffect(()=>{
        if(theme==="dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");

        }

    },[theme])
    function handleTheme(){
        setTheme(theme==="dark"?"light":"dark");
       
    }
// storing in locale
function hanldeStoreLocal(){
const items=JSON.parse(localStorage.getItem("items"));
if(items){
    const newItem=[...items,...objArr];
localStorage.setItem("items",JSON.stringify(newItem));
setObj((c)=>[])
}
else{
    if(objArr.length>0){
        localStorage.setItem("items",JSON.stringify(objArr));
setObj((c)=>[])

    }
}
}
function handleDefaultQ(e,val){
    setFirstRender(false)
    console.log(e,val);
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
    console.log(formattedTime);
    setObj((c)=>[...c,{
        question:val.question,
        answer:val.answer,
        time:formattedTime,
        rating:0,
        id:val.id,
        feedback:"",
    }])
}

function handleAsk(e){
    e.preventDefault();
    setFirstRender(false)
    let id=crypto.randomUUID();
    console.log(id)

        let question=e.target.input.value;

    let ans="";
    const output=data.find((val)=>val.question.toLowerCase() ===question.toLowerCase().trim());
    if(output){
         ans=output.response;
    } else{
     ans="invalid!";
        }
        // time
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
        console.log(formattedTime); // Outputs something like "10:33 AM"
        
    setObj((c)=>[...c,{
        question:question,
        answer:ans,
        time:formattedTime,
        rating:0,
        id:id,
        feedback:"",
    }])
    e.target.input.value="";

}
    return <context.Provider value={value}>
    <div className=" dark:darkTheme m-h-[100%] flex flex-col justify-between items-center flex-1 homeGradient">
        <h1 className="mt-4 ml-16 md:mt-0 md:ml-0 self-start text-[#9785BA] w-[84px] h-8 font-UB  text-[28px] font-bold text-left">Bot Ai</h1>
        <button
        onClick={handleTheme}
        className={`absolute right-5 top-5 px-4 py-2 border border-gray-300 rounded ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>{theme==="dark"?"light mode":"dark mode"}</button>
        <div className="flex flex-col justify-center items-center gap-5 w-[50%] h-auto ">
            <h2 className="dark:text-white text-[#000000] w-[348px] h-[32px] font-Ub font-medium text-center text-[28px] mt-4">How Can I Help You Today?</h2>
            <img
            className="shadow-sm w-[65.3px] h-[69px]"
            src={pencil} alt="pencilimage"/>
        </div>
        {/* <div className="h-56 w-[90%] border-2 border-black "></div> */}
        {/* summa */}
       {firstRender?
       <ul className="w-[90%] flex flex-col justify-center items-center gap-1  md:h-auto md:flex md:flex-row md:flex-wrap md:gap-5 md:w-[90%] ">
        {
            defaultData.map((val)=>{
                return <li
                onClick={(e)=>handleDefaultQ(e,val)}
                className="dark:darkNav w-[100%] md:w-[48%] h-[80px] cursor-pointer " key={crypto.randomUUID()}>
                 <Question  from="default" text={val.question} time={val.time}/>
                </li>
            })
        }
       </ul>
       
       
       :<ul  className="h-auto flex flex-col  gap-5 w-[90%]">
            {objArr.length>0 && objArr.map((val,i)=>{
                return <li
                key={crypto.randomUUID()}>
                 <Question  text={val.question} time={val.time}/>
                 <Answer key={crypto.randomUUID} val={val} id={val.id} answer={val.answer} time={val.time}/>
                </li>
               
            }) }
        </ul>}
        <div className="mt-8 mb-8 w-[98%] min-h-[41px] ">
            <form
            onSubmit={(e)=>handleAsk(e)}
            className="flex flex-wrap justify-around items-center w-[100%] h-[100%] gap-2"
            action="">
                <input
                name="input"
                className="dark:border-none dark:text-white dark:darkNav w-[80%] bg-white border-[1px] rounded-[5px]"
                type="text"/>
                <button type="submit"
                className="dark:darkNav dark:text-white bg-[#D7C7F4] w-[73.82px] h-[41px] rounded-[5px]">Ask</button>
               {
               objArr.length>0?
               <button
                type="button"
                onClick={hanldeStoreLocal}
                className="dark:darkNav dark:text-white bg-[#D7C7F4] w-[73.82px] h-[41px] rounded-[5px]">Save</button>:
                <button
                type="button"
                disabled
                className="dark:darkNav dark:text-white bg-gray-300 w-[73.82px] h-[41px] rounded-[5px]">Save</button>
                }
            </form>
        </div>
    </div>
    </context.Provider>
}
export {Home}

export{context}