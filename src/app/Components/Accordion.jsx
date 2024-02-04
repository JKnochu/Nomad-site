"use client";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({ title,content }) => {
    
    const [isActive,setIsActive] = useState(false);

  return (
    <div 
        className="py-10 border-b-4 border-secondary-100 group hover:cursor-pointer"
        onClick={()=>setIsActive(!isActive)}
        >
        <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold mb-6">{title}</h3>
            <div className={` w-14 h-14 rounded-full bg-black flex justify-center items-center invisible group-hover:visible`}>
              <IoIosArrowUp className={` text-white w-5 h-5 transition-all duration-300 hidden group-hover:block ${isActive ? "rotate-[180deg]" : null}`} />
            </div>
        </div>
      <p className={` text-xl max-w-7xl ${isActive ? "block" : "hidden"} `}>{content}</p>
    </div>
  );
};

export default Accordion;
