import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center py-4 px-2'>
                <div className='flex items-center gap-[1ch]'> 
                    <div className=' w-5 h-5 bg-purple-500 rounded-full'/>  
                    <span className='text-sm font-semibold tracking-widest'>
                        GRIDFOLIO
                    </span>

                </div>
                <div className='flex gap-12 text-md text-zinc-400'   >
                    <Link className='text-black font-medium' href="#">  Home  </Link>
                    <Link href="#">  Projects  </Link>
                    <Link href="#">  Contact  </Link>

                </div>

                


            </nav>
        
        </div>
    )
}

export default Navbar
