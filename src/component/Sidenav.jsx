import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from '../assets/Beual-logo.png';
import home from '../assets/home.png';
import folder from '../assets/folder.png';
import users from '../assets/users.png';
import AdminImage from '../assets/setting (3).png';
import dropDown from '../assets/down-chevron.png';
import Logout from '../assets/logout (1).png';

const Sidenav = () => {
  const [openBar, setOpenBar] = useState(false);

  const handleClick = () => {
    setOpenBar(!openBar);
  };

  return (
    <div className='fixed flex gap-[2px]'>
      <div className='lg:w-[25vw] xl:w-[23vw] 2xl:w-[20vw] h-[100vh] bg-white lg:pl-[10%] 2xl:pl-[15%] lg:pt-6 2xl:pt-6 rounded-[1px]'>
        <div className='flex gap-2 items-center'>
          <img className='w-[39.86px] h-[39px]' src={Logo} alt="logo" />
          <h1 className='text-[#06476D] lg:text-[18px] xl:text-[20px] font-[800] font-[Avenir] '>Beaulah Destiny Club</h1>
        </div><br /><br />

        <div className='text-[gray]'>
          <NavLink
            to='/'
            exact
            className={({ isActive }) => `flex items-center gap-4 font-[500] w-[90%] h-[40px] pl-4 ${isActive ? 'bg-[#EBEBEB] text-black h-[45px] rounded-[5px] w-[90%] font-[700]' : ''}`}
          >
            <img src={home} alt="home-image" />
            <p className='text-[Avenir]'>Home</p>
          </NavLink><br />

          <div onClick={handleClick} className='flex cursor-pointer items-center pl-4 gap-4 font-[500]'>
            <img src={folder} alt="folder-image" />
            <p className='text-[Avenir] lg:pr-[18%] xl:pr-[28%]'>Application</p>
            <img className='size-4' src={dropDown} alt="drop-down" />
          </div><br />

          <div className={`${openBar ? 'block' : 'hidden'}`}>
            <NavLink
              to='/membership'
              className={({ isActive }) => `flex items-center pl-14 gap-4 font-[500] ${isActive ? 'bg-[#EBEBEB] text-black h-[45px] rounded-[5px] w-[90%] font-[700]' : ''}`}
            >
              <p className='text-[Avenir]'>Membership</p>
            </NavLink><br />

            <NavLink
              to='/userpage'
              className={({ isActive }) => `flex items-center pl-14 gap-4 font-[500] ${isActive ? 'bg-[#EBEBEB] text-black h-[45px] rounded-[5px] w-[90%] font-[700]' : ''}`}
            >
              <p className='text-[Avenir]'>Loan</p>
            </NavLink><br />

            <NavLink
              className={`flex items-center pl-14 gap-4 font-[500]`}
            >
              <p className='text-[Avenir]'>Early Withdrawal</p>
            </NavLink><br />
          </div>

          <div>
            <NavLink
              className={`flex items-center gap-4 font-[500] pl-2 `}
            >
              <img className='size-8' src={users} alt="users-image" />
              <p className='text-[Avenir]'>Users</p>
            </NavLink><br />

            <div style={{ marginTop: openBar ? (window.innerWidth >= 1536 ? '240px' : '100px') : '0' }}>
              <NavLink
                className={`flex items-center gap-4 font-[500] pl-2 `}
              >
                <img className='size-8' src={AdminImage} alt="admin-image" />
                <p className='text-[Avenir]'>Super Admin Log In</p>
              </NavLink><br />

              <NavLink
                className={`flex items-center gap-4 font-[500] pl-2 `}
              >
                <img className='size-8' src={Logout} alt="logout-image" />
                <p className='text-[Avenir]'>Logout</p>
              </NavLink><br />
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Sidenav;
