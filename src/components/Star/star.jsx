import { useState } from "react";
import { FaStar } from "react-icons/fa";
function Star({setObj,id,objArr,obj}){
    const [rating,setRating]=useState(obj.rating);
    const [rateColor,setColor]=useState(null)


    function hanldeRating(e,current){
        console.log(e,current);
            const updatedArr=objArr.map((val)=>{
                if(val.id === id){
                    return {...val,rating:+current}
                }
                else{
                return {...val}
                }
            })
            setObj((c)=>updatedArr);
    }
    return <div className="flex gap-2 items-center my-4">
        {[...Array(5)].map((star,index)=>{
            const currentRate=index+1;
            return (
                <>
                <label>
                <input 
                className="hidden "
                type="radio" name="rate"
                value={currentRate}
                onClick={(e)=>{
                setRating(currentRate);
                    hanldeRating(e,currentRate)}}
                />
                <FaStar
                className="cursor-pointer transform hover:scale-150 transition-transform duration-300 ease-in-out"
                size={25}
                color={currentRate <=(rating)?"yellow":"grey"}
                />
                </label>
                </>
            )
        })}
    </div>
}
export {Star};