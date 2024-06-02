import { useState } from "react"

function Rating(){
    const [rating,setRating]=useState(0);
    function hanldeRating(e){
        setRating(e.target.value)
        console.log(rating);
    }
    return <div>
        <input
        value={rating}
        onChange={(e)=>hanldeRating(e)}
        type="range" min="1" max="6" step="1"/>
        <p>{rating}</p>
    </div>
}
export {Rating}