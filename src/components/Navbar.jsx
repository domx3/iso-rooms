import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar({toggleCanvas}) {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] text-white px-4 mx-auto'>
    <div className='flex'>
      <h1 className='text-xl font-bold uppercase'>Isometric rooms</h1>
    </div>
      <ul className='hidden md:flex'> 
        <li className='p-4 ' onClick={toggleCanvas}>Home</li>        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? 
        <AiOutlineClose size={20} /> :
        <AiOutlineMenu size={20} />
      }
      </div>
      <div className={
        nav ? 
        'fixed md:hidden right-0 top-16 w-[60%] border-r h-full border-r-gray-100 bg-[#000300] z-10 ease-in-out duration-500' 
        : 'fixed left-[-100%]'
      }>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
        </ul>
      </div>
    </div>
  )
}