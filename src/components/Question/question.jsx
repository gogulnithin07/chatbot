// question generator
import youImage from "../../assets/you.png"
function Question({from,text,time}){
    if(from){
return <div className="dark:darkNav dark:border-none dark:border-black dark:text-white mb-4 bg-white h-[100%] w-[100%] border-2 rounded-2 flex flex-col justify-center items-center gap-3">
    <h3 className="text-black dark:text-white w-[100%] h-auto leading-[18.3px] font-UB font-bold text-base text-center ">{text}</h3>
    <p className="text-[#0000009E] dark:text-white w-[100%] h-auto font-OS text-xs text-center">Get immediate AI generated response</p>
</div>

    }
    else{
    return <div className="dark:border-none mb-4 bg-[#D7C7F421] max-h-[105px] w-[85%] border-2 rounded-[20px] flex gap-3">
<img 
className="w-[65.3px] h-[69px]"
src={youImage} alt="you"/>
<div className="min-h-[53px] w-[80%] dark:border-none">
    <h3 className=" dark:text-white text-black w-[29px] h-[18px] leading-[18.3px] font-UB font-bold text-base text-left ">You</h3>
    <p className="  dark:text-white w-[100%] h-[22px] font-OS text-base font-normal text-left">{text}</p>
    <p className="text-[#0000009E]  w-[53px] h-4 font-OS text-xs text-left">{time}</p>
</div>
    </div>
    }
}



export {Question}

