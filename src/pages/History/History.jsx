import { useEffect, useState } from "react";
import youImage from "../../assets/you.png"
import botImage from "../../assets/pencil.png"
function History()
{
    const [filterByRatings,setFilterByRatings]=useState(null);
    const [items,setItems]=useState(null);
    const [filteredItem,setFilteredItem]=useState([]);
useEffect(()=>{
 const item = JSON.parse(localStorage.getItem('items'));
setItems(item);
setFilteredItem(item)
// console.log(item)
console.log(item)
setFilterByRatings(null)
},[])

function handleChnage(e){
    const rate=Number(e.target.value);
    setFilterByRatings(rate);
    let arr=items?.filter((val)=>{
        if(rate===0){
            return val;
        }
        else{
            return rate===val.rating;
        }
    })
    setFilteredItem(arr)
}

    return <div className="min-h-screen grow-1 dark:darkTheme flex flex-col items-center gap-5 homeGradient w-[100%] ">
        <h1 className="mt-3 font-UB font-normal text-[28px] text-black dark:text-white">Conversation History</h1>
        <div className="rounded-lg h-10 w-[60%]">
        <select
        className="w-[100%]  rounded-lg dark:darkNav dark:text-white"
        value={filterByRatings}
        onChange={(e)=>handleChnage(e)} name="" id="">
            <option value="0" selected  >All Ratings</option>
            <option value="1" >1 Star</option>
            <option value="2" >2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
        </select>
        </div>
        {filteredItem?.length===0?<NoRatings/>:
        filteredItem?.map((val)=><HistoryPills obj={val}/>)}
        {items?null:<h1 className="dark:text-white w-[80%] text-center text-3xl font-UB mt-10 ">No Past Conversation</h1>}
    </div>
}
export {History};
function HistoryPills({obj}){
    return <div className="historyGradient dark:darkNav dark:text-white w-[95%] rounded-lg">
        <div className="mb-4 bg-[#D7C7F421] max-h-[105px] w-[90%] flex gap-3">
<img 
className="w-[65.3px] h-[69px]"
src={youImage} alt="you"/>
<div className="min-h-[53px] w-[100%]">
    <h3 className="text-black w-[29px] h-[18px] leading-[18.3px] font-UB font-bold text-base text-left dark:text-white">You</h3>
    <p className="w-[100%] h-[22px] font-OS text-base font-normal text-left">{obj.question}</p>
    <p className="text-[#0000009E]  w-[53px] h-4 font-OS text-xs text-left dark:text-white">{obj.time}</p>
</div>
    </div>
    {/*  */}
    <div className="mb-4 bg-[#D7C7F421] max-h-[auto] w-[90%] flex gap-3">
<img 
className="w-[65.3px] h-[69px]"
src={botImage} alt="you"/>
<div className="min-h-[auto] w-[100%]">
    <h3 className="text-black w-[29px] h-[auto] leading-[18.3px] font-UB font-bold text-base text-left dark:text-white  ">You</h3>
    <p className="w-[100%] h-[auto] font-OS text-base font-normal text-left dark:text-white">{obj.answer}</p>
    <p className="text-[#0000009E]  w-[auto] h-[auto] font-OS text-xs text-left dark:text-white">{obj.time}</p>
</div>
    </div>
    </div>
}
function NoRatings(){
    return <div className="w-[80%] h-[100px] dark:darkNav dark:text-white bg-white rounded-lg">
        
        <h1 className="text-center text-2xl">No such chats</h1>
    
    </div>
}