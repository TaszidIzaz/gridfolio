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
        <button className=" w-12 h-12 p-2 bg-white hover:bg-orange-400 hover:text-white transition-colors duration-300 rounded-full flex justify-center items-center">
            <svg 
                className="w-6 h-6transition-colors duration-2 ease-in-out hover:fill-current " 
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
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
                  className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current hover:bg-pink-400" 
                  role="img" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Behance</title>
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.375c-3.293 0-6-2.636-6-5.875s2.707-5.875 6-5.875s6 2.636 6 5.875s-2.707 5.875-6 5.875zm-.714-5.313h-.286c-.915 0-1.554-.647-1.554-1.5c0-1.24.988-2.125 2.286-2.125c.284 0 .428.033.572.067c.01.05.05.284.05.467c0 .285-.054.883-.228 1.23h-1.524c.004.032.004.064.004.106c0 .554.05 1.063.14 1.5zm3.75 3.312H15.61c.218.756.662 1.648 1.464 1.648c.106 0 .21-.012.322-.033c.016-.005.034-.01.054-.018c.04-.02.087-.05.15-.096c.098-.084.225-.202.385-.353l.564.436c-.368.455-.852.786-1.47.992c-.158.04-.31.072-.466.1c-.462.072-1.016.11-1.61.11c-1.723 0-3.05-.443-3.94-1.32c-.89-.877-1.337-2.162-1.337-3.856c0-1.696.446-3.042 1.337-4.038c.891-.996 2.217-1.494 3.977-1.494c.504 0 .975.03 1.412.092c.42.057.818.14 1.187.25c.05.014.106.024.173.04c.243.064.514.127.83.185c.364.08.74.142 1.126.194c.513.071 1.023.123 1.53.158c.385.028.75.05 1.103.067c.05.003.098.008.146.013c.498.042.97.09 1.414.146c.4.054.776.114 1.12.18c.498.096.883.17 1.155.245c.273.077.528.172.757.285c.258.124.486.277.68.46c.194.183.353.398.476.648c.122.25.22.522.293.815c.072.293.108.608.108.947c0 .895-.226 1.592-.68 2.09c-.453.5-1.086.75-1.9.75c-.072 0-.14-.003-.207-.008z"/>
                </svg>
              </button>

              <button
                onClick={() => window.open("https://m.facebook.com/taszid.izaz/", '_blank')}
                className="w-12 h-12 p-2 bg-white hover:bg-orange-400 hover:text-white transition-colors duration-300 rounded-full flex justify-center items-center"
                aria-label="Facebook Button"
              >
                <svg 
                  className="w-6 h-6 transition-colors duration-2 ease-in-out hover:fill-current " 
                  role="img" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path fill="currentColor" d="M14 2H2C2 2 2 2 2 2s0 0 0 0c0 0 0 0 0 0v20c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0h12c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0h5c1.105 0 2-0.895 2-2V4C18 2.895 17.105 2 16 2H14zM12 18V9H9v9H6V9H4V7h2V5c0-1.105 0.895-2 2-2h3V0s0 0 0 0c0 0 0 0 0 0H2C0.895 0 0 0.895 0 2v20c0 1.105 0.895 2 2 2h12c0 1.105 0.895 2 2 2s2-0.895 2-2V18H12z"/>
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
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                  <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-3.617-1.566 4.92 4.92 0 00-4.92 4.918c0 .385.045.76.127 1.122-4.09-.206-7.713-2.165-10.141-5.144a4.822 4.822 0 00-.664 2.475 4.92 4.92 0 002.19 4.098 4.9 4.9 0 01-2.224-.616v.061a4.923 4.923 0 003.946 4.829 4.996 4.996 0 01-2.212.084 4.92 4.92 0 004.604 3.417 9.863 9.863 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.068a13.955 13.955 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.016-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </button>
            </div>
          </div>
        </section>




    </>
    
  )
}
