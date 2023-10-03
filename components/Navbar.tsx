    import Link from 'next/link';
    import { motion } from 'framer-motion';
    import React, { ReactNode } from 'react';

    const FirstDivAnimation = {
        hidden: {
          translateY: '-10%', // Start from below the screen
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


    interface ScrollLinkProps {
    to: string;
    children: ReactNode;
    }

    const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children }) => {
    const handleClick = () => {
        const element = document.getElementById(to);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const linkStyle = {
        cursor: 'pointer', // Set the cursor to pointer
    };

    

    return (
        <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        style={linkStyle}
        >
        {children}
        </motion.a>
    );
    };

    const Navbar = () => {
    return (
        <motion.div
        
            initial="hidden"
            animate="visible"
            variants={FirstDivAnimation}
            >
        <nav className='flex justify-between items-center py-4 px-2'>
            <div className='flex items-center gap-[1ch]'>
            <div className='w-5 h-5 bg-purple-500 rounded-full' />
            <span className='text-sm font-semibold tracking-widest'>
                GRIDFOLIO
            </span>
            </div>
            <div className={`flex ${window.innerWidth <= 480 ? 'gap-2' : 'gap-12'} text-md text-zinc-400`}>
            <Link className='text-black font-medium' href='#'>
                Home
            </Link>
            <ScrollLink to='projects'>Projects</ScrollLink>
            <ScrollLink to='contact'>Contact</ScrollLink>
            </div>
        </nav>
        </motion.div>
    );
    };

    export default Navbar;
