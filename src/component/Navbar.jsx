import React from 'react'
import Settings from '../assets/setting.png'
import User from '../assets/user (5).png'

const Navbar = () => {
  return (
    <div className='fixed lg:ml-[25.5vw] xl:ml-[23.5vw] 2xl:ml-[20.5vw] lg:w-[74.5vw] xl:w-[76.5vw] 2xl:w-[79.5vw] lg:h-[6vw] 2xl:h-[82px] bg-white lg:pt-4 xl:pt-6'>
      <div className='flex items-center gap-4 float-right lg:pr-[2%] xl:pr-[2%] 2xl:pr-[3%]'>
        <img className='size-[20px] cursor-pointer' src={Settings} alt="Settings-image" />
        <img className='size-[30px] cursor-pointer' src={User} alt="Profile-image" />
      </div>
    </div>
  )
}

export default Navbar