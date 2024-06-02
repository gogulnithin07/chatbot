import { useContext, useEffect, useRef, useState } from "react";
import image from "../../assets/pencil.png"
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import {context} from "../../pages/Home/Home"
import { Star } from "../Star/star";
import ideaimage from "../../assets/image.png"
import { IoClose } from "react-icons/io5";
// modal
import Modal from 'react-modal';
// 
const isSmallScreen = window.innerWidth < 640;
  const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;
  const isLargeScreen = window.innerWidth >= 1024;
const customStyles = {
    content: {
      // top: '50%',
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: isSmallScreen ? '90%' : isMediumScreen ? '60%' : '40%',
      padding: '20px',
      borderRadius: '10px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
//   
function Answer({answer,time,id,val}){
    const [thumbsUp,setThumbsUp]=useState(false);
    const [thubsDown,setThumbDown]=useState(false);
    const {objArr,setObj}=useContext(context);
  const [modalIsOpen, setIsOpen] =useState(false);

    console.log(objArr,id);
    // modal
    let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

function hanldeUp(e,rating){
    if(rating===0)setThumbsUp((c)=>!c);
}
        return <div className=" dark:border-none dark:text-white mb-4 bg-[#D7C7F421] min-h-[105px] max-h-auto w-[85%] border-2 rounded-[20px] flex gap-3">
    <img 
    className="w-[65.3px] h-[69px]"
    src={image} alt="you"/>
    <div className="min-h-[53px] w-[90%]">
        <h3 className=" dark:text-white text-black w-[54px] h-[18px] leading-[18.3px] font-UB font-bold text-base text-left ">Soul AI</h3>
        <p className="w-[100%] h-auto font-OS text-base font-normal text-left">{answer}</p>
   <div>
    <p className="text-[#0000009E]  dark:text-white w-[53px] h-4 font-OS text-xs text-left">{time}</p>
    <div  className="mt-4 flex justify-between items-center w-[43px]">
    
   <button
   onClick={(e)=>hanldeUp(e,val.rating)}
   ><FiThumbsUp className="w-4 h-4"/></button> 
   <button
   onClick={(e)=>{
    openModal()
    setThumbDown((c)=>!c)}}
   ><FiThumbsDown className="w-4 h-4"/></button> 
    </div>
   {(thumbsUp||val.rating>0)? <Star obj={val} objArr={objArr} setObj={setObj} id={id}/>:null}

    </div>
    {val.feedback && <div>feedback:{val.feedback}</div>}
    </div>
    {
     <Modal
     isOpen={modalIsOpen}
     onAfterOpen={afterOpenModal}
     onRequestClose={closeModal}
     style={customStyles}
     contentLabel="Example Modal"
   >
    <form
    className=" dark:bg-slate-800  relative flex flex-col justify-around gap-2 w-[100%] h-[355px] border-0 "
    onSubmit={(e)=>{
        e.preventDefault();
console.log(e.target.in.value)
const updatedArr=objArr.map((val)=>{
    if(val.id === id){
        return {...val,feedback:e.target.in.value}
    }
    else{
    return {...val}
    }
})
setObj((c)=>updatedArr);

    }}>
        <h3 className="dark:text-white flex items-center gap-5 text-black font-OS text-[22px] font-normal text-left">
          <img
          className="dark:text-white w-[40px] h-[42px]"
          src={ideaimage} alt="idea"/>
            Provide Additional Feedback
            </h3>
            <span
            onClick={closeModal}
            className="dark:text-white cursor-pointer absolute right-3 top-3" ><IoClose size={30}/></span>
        <textarea
        className="dark:text-white dark:bg-slate-800 dark:border-white self-center mt-2 border-[1px] border-[#00000073] w-[90%] h-[60%] rounded-[10px] bg-white"
        rows="3"
        color="30"
        name="in"/>
        <button
        className="dark:text-white dark:darkNav self-end mr-5 w-[120px] h-[40px] rounded-[5px] bg-[#D7C7F4] font-UB font-normal text-xl text-black"
        >Submit</button>
    </form>
    </Modal>}
    {/* star */}
        </div>
    }

export {Answer};