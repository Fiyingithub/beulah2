import React from 'react'
import fileFolder from '../../assets/files-and-folders.png'
import increase from '../../assets/increase.png'
import users from '../../assets/users.png'
import arrow from '../../assets/arrow (4).png'

const Home = () => {
  return (
    <div className='lg:w-[75vw] xl:w-[76vw] 2xl:w-[80vw] h-[89vh] lg:ml-[25vw] xl:ml-[23vw] 2xl:ml-[20vw] lg:pt-[6vw] 2xl:pt-[70px] lg:pl-6 xl:pl-8 2xl:pl-10 lg:pr-o xl:pr-2 2xl:pr-0'>
      <h1  className='py-4 leading-[65.57px]  text-[48px] font-[800] font-[Avenir]'>Dashboard</h1>

      <div className='flex lg:gap-[20px] xl:gap-[25px] 2xl:gap-[36px]'>
        <div className='lg:w-[70%] xl:w-[70%] 2xl:w-[865px] h-[466px] rounded-[16px] p-[32px] bg-white'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
              <div className='w-4 h-10 bg-[#06476D]'></div>
              <b>Total Users</b>
            </div>
            
            <div>
              <select className='2xl:w-[120px] px-2 h-[30px] border-2'>
                <option>Last week</option>
              </select>
            </div>
          </div><br />

          <div>
            <b className='text-2xl text-[Avenir]'>1,263 users</b>
            <div className='flex items-center gap-2'>
              <div className='flex gap-1 mt-1 w-20 h-6 bg-[#ccf4d6]'>
                <img className='h-6' src={arrow} alt="" />
                <p className='text-[#54ce70] font-[600]'>13.5%</p>
              </div>
              <b className='text-sm'>vs,Aug 2024</b>
            </div>
          </div><br />

          <div className='mt-2'>
            <div className='flex items-center gap-1'>
              <p className=''>1300</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 items-center gap-1'>
              <p className=''>1200</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>900</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>600</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>300</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
            <div className='flex mt-4 ml-2 items-center gap-1'>
              <p className=''>100</p>
              <p className='w-[100%] h-[1.5px] bg-gray-200'></p>
            </div>
          </div>

          <div className='flex items-center ml-12 lg:gap-10 xl:gap-24'>
            <p>Aug</p>
            <p>Sep</p>
            <p>Oct</p>
            <p>Nov</p>
            <p>Dec</p>
            <p>Jan</p>
          </div>

        </div>




        <div className='lg:w-[25vw] xl:w-[35%]'>
          <div className='flex lg:gap-4 xl:gap-6 2xl:gap-10 items-center lg:w-[93%] xl:w-[100%] 2xl:w-[338px] xl:h-[150px] 2xl:h-[161px] rounded-[16px] lg:p-[20px] xl:p-[32px] bg-white'>
           <div className='lg:size-10 xl:size-10 2xl:size-16 rounded-[360px] lg:py-[7px] xl:py-2 2xl:py-4 lg:px-[5px] xl:px-2 2xl:px-4 bg-[#EBEBEB]'>
             <img className='lg:size-6 xl:size-6 2xl:size-8' src={users} alt="user-profile" />
           </div>
            <div className=''>
              <p className='xl:text-[15px] 2xl:text-lg text-[gray]'>Membership Forms</p>
              <b className='lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#06476D]'>19</b>
            </div>
            
          </div>
          <div className='flex lg:gap-4 xl:gap-6 2xl:gap-10 items-center mt-[36px] lg:w-[93%] xl:w-[100%] 2xl:w-[338px] xl:h-[150px] 2xl:h-[161px] rounded-[16px] lg:p-[20px] xl:p-[32px] bg-white'>
           <div className='lg:size-10 xl:size-10 2xl:size-16 rounded-[360px] lg:py-[7px] xl:py-2 2xl:py-4 lg:px-[7px] xl:px-2 2xl:px-4 bg-[#EBEBEB]'>
             <img className='lg:size-6 xl:size-6 2xl:size-8' src={increase} alt="user-profile" />
           </div>
            <div className=''>
              <p className='xl:text-[15px] 2xl:text-lg text-[gray]'>Loan Application</p>
              <b className='lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#06476D]'>2</b>
            </div>
            
          </div>
          <div className='flex lg:gap-4 xl:gap-6 2xl:gap-10 items-center mt-[36px] lg:w-[93%] xl:w-[100%] 2xl:w-[338px] xl:h-[150px] 2xl:h-[161px] rounded-[16px] lg:p-[20px] xl:p-[32px] bg-white'>
           <div className='lg:size-10 xl:size-10 2xl:size-16 rounded-[360px] lg:py-[7px] xl:py-2 2xl:py-4 lg:px-[7px] xl:px-2 2xl:px-4 bg-[#EBEBEB]'>
             <img className='lg:size-6 xl:size-6 2xl:size-8' src={fileFolder} alt="user-profile" />
           </div>
            <div className=''>
              <p className='xl:text-[16px] 2xl:text-lg text-[gray]'>Early Withdrawal</p>
              <b className='lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#06476D]'>23</b>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home