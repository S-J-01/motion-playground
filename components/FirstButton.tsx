'use client'
import { motion } from "motion/react";

const FirstButton = ()=>{
return(
 <div className="flex items-center justify-center bg-neutral-700 h-screen">
    <motion.button
    initial={{
      rotate:0
    }} 
    animate={{
      rotate:10
    }}
    transition={{
      duration:1
    }}
    className="relative  shadow-sm  px-15 py-5 bg-neutral-950 rounded-2xl " onClick={()=>alert('subscribe')} >Subscribe
    <span className="absolute left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px"></span>
    </motion.button>
  
 </div>
)
}

export default FirstButton;