import React from 'react'
import Arrow from "../public/arrow.svg"
import { motion } from 'framer-motion';

interface Props {
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    bgColor?: string | undefined;
    dark?: boolean | undefined;
    link?: string | undefined;

}

const Project: React.FC<Props> = ({
    name = "Project",
    description = "description",
    imageUrl = "/project-1.png",
    bgColor = "#e4e4e7",
    dark = false,
    link = "#",

}) => {

    const divStyle: React.CSSProperties = {
        background: bgColor,
    };


    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <motion.div
            initial="initial"
            whileInView="animate"
            variants={PreviewAnimation}
        
        className= {`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
        style={divStyle}>


            <div className=' h-full w-full px-10 pt-8 py-6 duration-1000 transition-all ease-in-out hover:scale-105 bg-cover bg-no-repeat bg-center ' 
            style={{backgroundImage: `url('${imageUrl}')`, backgroundPosition: 'center 30px' }}>

                <div className=' flex justify-between'>
                    <div>
                        <h2 className=" font-medium text-lg dark:text-white ">{name}</h2>
                        <p className=' text-sm text-zinc-700 dark:text-zinc-300'>{description}</p>
                    </div>
                    <div className=' h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer '>
                        <Arrow className=" w-6 h-6 " />

                    </div>

                </div>
            </div>
        
        </motion.div>
        </a>
    )
}

const PreviewAnimation = {
    initial: {
        y: 30,
        opacity: 0,
        scale: 0.9,

    },

    animate:{
        y : 0,
        opacity: 1,
        scale: 1,
        Transition:{
            ease:[0.6, 0.01, 0.05, 0.95],
            duration: 0.2,
        }

    }

}




export default Project
