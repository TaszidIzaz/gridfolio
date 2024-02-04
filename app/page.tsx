"use client";

import Navbar from '@/components/Navbar'
import Project from '@/components/Project';
import { motion } from 'framer-motion';
import '@fontsource/onest';


const FirstDivAnimation = {
  hidden: {
    translateY: '-70%', // Start from below the screen
    // rotate: '4deg', // Apply a slight rotation
    opacity: 0, // Initially hidden
  },
  visible: {
    translateY: '0%', // Move to the normal position
    rotate: '0deg', // Remove rotation
    opacity: 1, // Fully visible
    transition: {
      duration: 0.8, // Adjust the duration as needed
      type: 'easeInOut', // You can use other animation types like "tween" or "easeInOut"
      damping: 8, // Adjust damping for spring animation
    },
  },
};

const SecondDivAnimation = {
  hidden: {
    translateY: '-50%', // Start from below the screen
    // rotate: '4deg', // Apply a slight rotation
    opacity: 0, // Initially hidden
  },
  visible: {
    translateY: '0%', // Move to the normal position
    rotate: '0deg', // Remove rotation
    opacity: 1, // Fully visible
    transition: {
      duration: 0.8, // Adjust the duration as needed
      type: 'easeInOut', // You can use other animation types like "tween" or "easeInOut"
      damping: 8, // Adjust damping for spring animation
    },
  },
};



export default function Home() {
  return (
    
    <>
      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4 mt-10">

        <motion.div className="rounded-3xl p-10 flex flex-col gap-6 bg-[url('/gradient-bg.jpg')] bg-cover ${window.innerWidth <= 485 ? 'h-[40rem]' : 'h-[34rem]'}"
        
          initial="hidden"
          animate="visible"
          variants={FirstDivAnimation}
          >
        <h1
          className= ' text-4xl font-semibold'
        > Hello, I&apos;m <span className=' text-purple-600 font-bold'>Taszid Izaz </span> a Creative Developer with 2 Years of Experience. </h1>

        <p
          className='flex-1'
        >
          I transform concepts into captivating visuals and interactive wonders.
            Welcome to my portfolio of creative endeavors. I specialize in crafting humane experiences that provide
            better user interactions and leave a positive impact in the world. 
        </p>
          <div className=' flex flex-col lg:flex-row items-center gap-4 justify-self-end'>
            <button className=' bg-black border-2 border-transparent text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:bg-white hover:text-black hover:border-black hover:border-2  transition-colors duration-200 ease-in-out flex justify-center items-center'
            onClick={() => window.location.href = 'mailto:taszid.nahi@gmail.com'}>
              Contact Me
            </button>

            <div className='flex items-center gap-4'>
            <a href="https://www.behance.net/taszidizaz" target="_blank" rel="noopener noreferrer" aria-label="Dribbble Button">
            <button 
            className="h-12 w-12 bg-white rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center hover:bg-pink-400 hover:text-white  "
            aria-label="Dribbble Button"
        >
            <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current  hover:bg-pink-400" 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Dribbble</title>
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
            </svg>
        </button>
        </a>


        <a href="https://m.facebook.com/taszid.izaz/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble Button">
        <button className=" w-12 h-12 p-2 bg-white hover:bg-blue-800 hover:text-white transition-colors duration-300 rounded-full flex justify-center items-center">
            <svg 
                className="w-6 h-6transition-colors duration-2 ease-in-out hover:fill-current " 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Facebook</title>
                <path d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406
                C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914
                c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643
                h2.516V4.458z"/>
            </svg>
        </button>
        </a>

        <a href="https://www.linkedin.com/in/taszid-izaz/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble Button"> 
        <button className=" w-12 h-12 p-2 bg-white hover:bg-blue-700 transition-colors hover:text-white duration-300 rounded-full flex justify-center items-center">
            <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current" 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        </button>
        </a>


        <a href="https://twitter.com/TaszidI/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble Button">
        <button className=" w-12 h-12 p-2 bg-white hover:bg-blue-400 transition-colors duration-300 hover:text-white rounded-full flex justify-center items-center">
            <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current" 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-3.617-1.566 4.92 4.92 0 00-4.92 4.918c0 .385.045.76.127 1.122-4.09-.206-7.713-2.165-10.141-5.144a4.822 4.822 0 00-.664 2.475 4.92 4.92 0 002.19 4.098 4.9 4.9 0 01-2.224-.616v.061a4.923 4.923 0 003.946 4.829 4.996 4.996 0 01-2.212.084 4.92 4.92 0 004.604 3.417 9.863 9.863 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.068a13.955 13.955 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.016-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            </svg>
        </button>
        </a>

        <button
                onClick={() => window.open("https://github.com/TaszidIzaz", '_blank')}
                className="w-12 h-12 p-2 bg-white hover:bg-blue-900 transition-colors duration-300 hover:text-white rounded-full flex justify-center items-center"
                aria-label="Github Button Button"
              >
                <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current" 
                role="img" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Github</title>
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
              </button>

        </div>



          </div>
          
        </motion.div>
        <motion.div className=" h-[32rem] rounded-3xl p-8 bg-[url('/profile.jpg')] bg-cover bg-center"
        
          initial="hidden"
          animate="visible"
          variants={SecondDivAnimation}
          />
      </section >
      <section id="projects" className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>
        <Project
          name='Remeal'
          description='A Meal Reminder App'
          imageUrl='/remeal.png'
          bgColor="#62A1FF" 
          dark
          link='https://www.behance.net/gallery/176739353/Remeal-A-Meal-Tracker-App-Case-Study'
        />

        <Project
          name='Cloudly'
          description='A Healthcare Companion App'
          imageUrl='/Cloud.png'
          bgColor="#DBDBDB" 
          link='https://www.behance.net/gallery/190566089/Cloudly-Health-Companion-App-UX-Case-Study-Showcase'
        />  

        <Project
          name='Dashboard'
          description='A Dashboard Design Project'
          imageUrl='/dashboard.png'
          bgColor="#CCFCFF" 
          link="https://www.behance.net/gallery/167639395/Dashboard-UI"
          
        />

        <Project
          name='InZyne'
          description='InZyne Creative Agency Website Design'
          imageUrl='/inz.png'
          bgColor="#E5DDFF" 
          link="https://www.behance.net/gallery/190705411/InZyne-Creative-Agency-Website-Design"
          
        />

        <Project
          name='Vwave'
          description='A Red Light Therapy Website Design'
          imageUrl='/vwave.png'
          bgColor="#E8E0CF" 
          link="https://www.behance.net/gallery/184963965/Red-Light-Therapy-Website-Design"
          
        />

        <Project
          name='OpenCollab'
          description='Open Source Collaboration Website Design'
          imageUrl='/OSC.png'
          bgColor="#C5CAFF" 
          link="https://www.behance.net/gallery/184817129/Open-Source-Collaboration-Website-Showcase"
          
        />



        <Project
          name='Space Journey'
          description='A Web Three JS Experience'
          imageUrl='/spacee.jpeg'
          bgColor="#0C0621" 
          dark
          link="https://github.com/TaszidIzaz/n1"
        />

        <Project
          name='IUT Mosque'
          description='A Voxel 3D Mosque Design of IUT Mosque'
          imageUrl='/IUT.png'
          bgColor="#223A60" 
          dark
          link="https://www.behance.net/gallery/158105909/IUT-Mosque-In-Magicavoxel"
        />


        <Project
          name='Atis'
          description='A Design Agency Website'
          imageUrl='/catis.png'
          bgColor="#D1FAE5" 
          link="https://agency-seo-tk1p-nz1rkwbxa-taszidizaz.vercel.app/"
        />

        <Project
          name='Creative Agency Website'
          description='Recreating A Creative Agency Website '
          imageUrl='/duo.png'
          bgColor="#D0D0D0"
          link="https://duo-agency-website-belj.vercel.app/"
            
        />


        <Project
          name='Hoobank'
          description='Payment System Landing Page'
          imageUrl='/hoobank.png'
          bgColor="#005F6F" 
          dark
          link="https://bank-landing-page-coral.vercel.app/"
        />

        <Project
          name='Magma'
          description=' Web3 Landing Page'
          imageUrl='/magma.png'
          bgColor="#93B8FF" 
          link="https://taszidizaz.github.io/magma/"
        />

        <Project
          name='Hotel-Review'
          description='Hotel Review Service Agency Website Design'
          imageUrl='/Hotel.png'
          bgColor="#A5C5F9" 
          link="https://www.behance.net/gallery/174383315/Hotel-Review-Service-Agency-Landing-Page"
          
        />


        


      </section>


        <section id="contact" className="grid grid-cols-1 mt-10">
            <div className={"text-white rounded-t-3xl rounded-b-none p-10 flex flex-col gap-6 bg-[url('/grad2.jpg')] bg-cover ${window.innerWidth <= 480 ? 'h-[34rem]' : 'h-[30rem]'}"}>
            <h1 className='text-4xl font-semibold'> Want To <span className='text-yellow-400 font-bold'>Work </span> Together? </h1>

            <p className='flex-1'>
              Let&apos;s converse and explore how we can work together to create something amazing. Let me 
              be the catalyst for turning your visions into reality.
            </p>

            <p className='text-lg'>
              Reach Out to me : <span className='text-white text-2xl font-bold'>Taszid.nahi@gmail.com </span> 
            </p>
            
            <div className='flex flex-col lg:flex-row items-center gap-4 justify-self-end'>
              <button
                onClick={() => window.location.href = "mailto:Taszid.nahi@gmail.com"}
                className='bg-black border-2 border-transparent text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:bg-white hover:text-black hover:border-black hover:border-2 transition-colors duration-200 ease-in-out flex justify-center items-center'
              >
                Contact Me
              </button>

              <button
                onClick={() => window.open("https://www.behance.net/taszidizaz", '_blank')}
                className="h-12 w-12 bg-white rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center hover:bg-pink-400 hover:text-white"
                aria-label="Behance Button"
              >
              <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current  hover:bg-pink-400" 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Behance</title>
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
            </svg>
              </button>

              <button
                onClick={() => window.open("https://m.facebook.com/taszid.izaz/", '_blank')}
                className="w-12 h-12 p-2 bg-white hover:bg-blue-800 hover:text-white transition-colors duration-300 rounded-full flex justify-center items-center"
                aria-label="Facebook Button"
              >
                <svg 
                className="w-6 h-6transition-colors duration-2 ease-in-out hover:fill-current " 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Facebook</title>
                <path d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406
                C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914
                c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643
                h2.516V4.458z"/>
            </svg>
              </button>

              <button
                onClick={() => window.open("https://www.linkedin.com/in/taszid-izaz/", '_blank')}
                className="w-12 h-12 p-2 bg-white hover:bg-blue-700 transition-colors hover:text-white duration-300 rounded-full flex justify-center items-center"
                aria-label="LinkedIn Button"
              >
                <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current" 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
              </button>

              <button
                onClick={() => window.open("https://twitter.com/TaszidI/", '_blank')}
                className="w-12 h-12 p-2 bg-white hover:bg-blue-400 transition-colors duration-300 hover:text-white rounded-full flex justify-center items-center"
                aria-label="Twitter Button"
              >
                <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current" 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-3.617-1.566 4.92 4.92 0 00-4.92 4.918c0 .385.045.76.127 1.122-4.09-.206-7.713-2.165-10.141-5.144a4.822 4.822 0 00-.664 2.475 4.92 4.92 0 002.19 4.098 4.9 4.9 0 01-2.224-.616v.061a4.923 4.923 0 003.946 4.829 4.996 4.996 0 01-2.212.084 4.92 4.92 0 004.604 3.417 9.863 9.863 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.068a13.955 13.955 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.016-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            </svg>
              </button>



              <button
                onClick={() => window.open("https://github.com/TaszidIzaz", '_blank')}
                className="w-12 h-12 p-2 bg-white hover:bg-blue-900 transition-colors duration-300 hover:text-white rounded-full flex justify-center items-center"
                aria-label="Github Button Button"
              >
                <svg 
                className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current" 
                role="img" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Github</title>
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
              </button>


            </div>
          </div>
        </section>




    </>
    
  )
}
