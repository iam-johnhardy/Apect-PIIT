import React, { useState } from 'react'
import Profile from "../assets/images/profile.jpg"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { HiMenuAlt2 } from "react-icons/hi";


export default function NavBar() {
  const [save, setSave] = useState(true)
  return (
    <header className='lato-thin flex items-center justify-between py-5 px-7'>
        <div className='flex items-center gap-1'>
            <MdOutlineCheckBoxOutlineBlank className='text-amber-300' />
          <h5>Streambox.</h5>
        </div>
        <nav className=''>
            <ul className='flex items-center gap-7'>
                <li className='py-1 px-2 hover:bg-amber-300 rounded-md'>Series</li>
                <li className='py-1 px-2 hover:bg-amber-300 rounded-md'>Movies</li>
                <li className='py-1 px-2 hover:bg-amber-300 rounded-md'>Music</li>
                <li className='py-1 px-2 hover:bg-amber-300 rounded-md'>Sports</li>
                <li className='py-1 px-2 hover:bg-amber-300 rounded-md'>Gaming</li>
            </ul>
           
        </nav>
         <div className='flex items-center gap-3'>
                  <button onClick={() => setSave(prev =>!prev) }>
                         {save ?' ❤️' : '😩'}
                  </button>
                  <div className='p-1 bg-slate-700 text-white rounded-4xl'>
                      <LuSearch/>
                </div>
                <div className='p-1 bg-slate-700 text-white rounded-4xl'>
                      <HiMenuAlt2 />
                </div>
                
                <img src={Profile} alt="Profile Image" className='rounded-4xl w-6 h-6 border-2 border-amber-300'/>

            </div>
        

    </header>
  )
}
