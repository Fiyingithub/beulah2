import Arrow from '../../assets/less-than-symbol.png'
import { Link } from 'react-router-dom'
import Image from '../../../public/image.svg'
import React from 'react'
import calendar from '../../assets/calendar.png'
import deletes from '../../assets/bin.png'
import cancel from '../../assets/cancel (2).png'
import { useState } from 'react'





const Userpage = () => {
  const [imageCancel,setImageCancel] = useState(true);
  const cancleClick = () => {
    setImageCancel(!imageCancel);
  };






  return (
    <div className="h-[89vh] pt-20 lg:w-[74.5vw] xl:w-[76.5vw] 2xl:w-[80vw] lg:ml-[25.5vw] xl:ml-[23.5vw] 2xl:ml-[18vw] lg:pt-[6vw] 2xl:pt-[6vw] lg:pl-4 xl:pl-0 2xl:pl-4 lg:pr-2 xl:pr-2 2xl:pr-0 ">

      <div className=" flex justify-between items-center mt-4 2xl:px-10 font-[Avenir]">

        <h1 className="font-[800] text-[48px] text-black xl:pl-8 2xl:pl-0">Usher Raymond</h1>

        <div className="flex items-center">

          <div className="bg-gray-300 rounded-[360px] px-1 py-1 mt-3 mr-2 w-[25px] h-[25px]" >
            <img src={Arrow} className="w-6 h-4 text-black" />
          </div>
          <Link to='/membership' className="underline mt-3 xl:pr-4 2xl:pr-0">Back to Membership Applications </Link>
        </div>
      </div>

      <div className='flex gap-4 xl:pl-8 2xl:pl-10  mt-4'>
        <div className='xl:w-[50vw] 2xl:w-[54vw] h-[100%] pb-20 bg-white rounded-[5px] lg:px-2 xl:px-6 2xl:px-10'>
          {/* Profile */}

          <div className="flex items-center mt-6 ">
            <img src={Image} className="w-[49px] h-[49px] rounded-[560px] mt-1 "/>
            <div className="w-[4px] h-[18px] bg-black ml-4 mt-5"></div>
            <Link className="mt-4 text-[15px] font-[500] underline ml-2">
              View Picture
            </Link>
          </div><br />
          <div className='flex 2xl:justify-center lg:gap-2 xl:gap-4 2xl:gap-8'>
            <div className="  ">
              <p className="lg:mt-[20px] xl:mt-0 2xl:mt-0 lg:text-[13px] xl:text-[13px] 2xl:text-[16px]">Personal Details</p>
              <hr className="lg:w-[10vw] xl:w-[10vw] 2xl:w-[13vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] text-[12px] mt-3">Firstname</p>
              <p className="text-[14px]  mt-1">Usher</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Surname</p>
              <p className="text-[14px]  mt-1">Raymond</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Other Name</p>
              <p className="text-[14px]  mt-1">Singer</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Email Address</p>
              <p className="lg:text-[13px] 2xl:text-[14px]  mt-1">UsherRaymond@mail.com</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Gender</p>
              <p className="text-[14px]  mt-1">Male</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Date of Birth</p>
              <p className="text-[14px]  mt-1">19-02-1998</p>

              {/* Health Details */}
              <div className="lg:pt-[350px] xl:pt-[265px] 2xl:pt-[180px]">
                <p className="text-[16px] ">Health Details</p>
                <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
                <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                  Body Max Index (BMI)
                </p>
                <p className="text-[14px]  mt-1">39.5</p>
                <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                  Average Daily Blood Pressure
                </p>
                <p className="text-[14px]  mt-1">111</p>
                <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                  Fasting Blood Sugar
                </p>
                <p className="text-[14px]  mt-1">398</p>
                <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                  2HPP Blood Sugar
                </p>
                <p className="text-[14px]  mt-1">232</p>
                <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                  Health Issues, if any
                </p>
                <p className="text-[14px]  mt-1">Diebetes</p>
              </div>
            </div>
            {/* Contact Details */}
            <div className=" ">
              <p className="lg:text-[13px] xl:text-[13px] 2xl:text-[16px]">Address and Contact Details</p>
              <hr className="lg:w-[12vw] xl:w-[13vw] 2xl:w-[13vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                Residential Address
              </p>
              <p className="text-[14px]  mt-1">
                1, Abule Egba Street,
                <br />
                Egbeda, Lagos State
              </p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                Ownership Of Residence
              </p>
              <p className="text-[14px]  mt-1">Tenant</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">Postal Address</p>
              <p className="text-[14px]  mt-1">100292</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">Telephone 1</p>
              <p className="text-[14px]  mt-1">2348172638267</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">Gender</p>
              <p className="text-[14px]  mt-1">Male</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">Telephone 2</p>
              <p className="text-[14px]  mt-1">2348172638267</p>
              <br />
              {/* Business Detail */}
              <div className="lg:mt-[245px] xl:pt-[220px] 2xl:pt-[135px]">
                <p className="text-[16px] ">Business Details</p>
                <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
                <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                  Address of Place of Business
                </p>
                <p className="text-[14px]  mt-1">
                  1, Abule Egba Street,
                  <br />
                  Egbeda, Lagos State
                </p>
                <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                  Type of Business
                </p>
                <p className="text-[14px]  mt-1">Sole Proprietor</p>
              </div>
            </div>

            {/* Education And Family Details */}
            <div className="  ">
              <p className="lg:text-[13px] xl:text-[13px] 2xl:text-[16px]">Education and Family Details</p>
              <hr className="lg:w-[13vw] xl:w-[10vw] 2xl:w-[13vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                Highest Education
              </p>
              <p className="text-[14px]  mt-1">University Degree</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">Next of Kin</p>
              <p className="text-[14px]  mt-1">Raymond Kim</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                Number of Children
              </p>
              <p className="text-[14px]  mt-1">3</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                Number of Male Children
              </p>
              <p className="text-[14px]  mt-1">1</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                Number of Female Children
              </p>
              <p className="text-[14px]  mt-1">2</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">Age of Youngest</p>
              <p className="text-[14px]  mt-1">10</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">Age of oldest</p>
              <p className="text-[14px]  mt-1">20</p>
              <p className="text-[#AAAAAA] 2xl:text-[12px] mt-3">
                Number of other Dependant
              </p>
              <p className="text-[14px]  mt-1">None</p>
            </div>
          </div>
        </div>


        <div>
         {/* Form Details 1*/}
          <div className='w-[21vw] h-[400px] bg-white rounded-[5px] lg:px-2 xl:px-6'>
          <form action="">
            <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-6">
              Penalty In Naira
            </p>
            <div className="border border-[#AAAAAA] bg-[#EBEBEB] flex  focus:outline-none pl-[16px] mt-2 w-[100%] h-[45px] rounded-[5px]">
              <img src="./image/nigeria-naira-currency-symbol.png" className="w-[10px] h-[30px] pt-4 "/>
              <input name='currency' type="text" className="focus:outline-none  w-[100%] h-[50px] ml-2  bg-transparent text-[20px]"/>
            </div>

            <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-6">
              Credit Score
            </p>
            <div className="border border-[#AAAAAA] bg-[#EBEBEB]   focus:outline-none pl-[16px] mt-2 w-[100%] h-[45px] rounded-[5px]">
              <input name='credit score' type="text" className="focus:outline-none  w-[100%] h-[50px] ml-2  bg-transparent text-[20px]"/>
            </div>

            <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-4">
              Minimum Monthly Deposit
            </p>
            <div className="border border-[#AAAAAA] bg-[#EBEBEB] flex  focus:outline-none pl-[16px] mt-2 w-[100%] h-[45px] rounded-[5px]">
              <img src="./image/nigeria-naira-currency-symbol.png" className="w-[10px] h-[30px] pt-4 "/>
              <input name='text' type="text" className="focus:outline-none  w-[100%] h-[50px] ml-2  bg-transparent text-[20px]"/>
            </div>

            {/* button */}
            <div className="flex items-center lg:gap-2 xl:gap-4 2xl:gap-6 lg:text-[12px] xl:text-[12px] 2xl:text-[14px] font-[500] font-[Avenir] mt-10 ">

              <button className="lg:w-[50%] lg:h-[45px] xl:w-[50%] xl:h-[45px] 2xl:w-[50%] 2xl:h-[45px] bg-white pt-1 xl:pl-1 border-2 border-black  rounded-[5px] text-black">
                Decline Request
              </button>
              <button className="lg:w-[50%] lg:h-[45px] xl:w-[50%] xl:h-[45px] 2xl:w-[50%] 2xl:h-[45px] bg-[#06476D] pt-1 xl:pl-1  rounded-[5px] text-white">
                Approve Request
              </button>
            </div>

          </form>
          </div><br />

          <div className='w-[21vw] 2xl:h-[600px] py-6 bg-white rounded-[5px] lg:px-2 xl:px-6 2xl:px-6'>
            {/* Form Details 2 */}
            <div className="flex font-[500] font-[Avenir] text-[20px] ">
              <p>Note</p>
              <div className="rounded-[3px] bg-[#EBEBEB] w-[20px] ml-2 h-[10px]rounded-[4px] text-[16px] pl-1 pt-1  gap-2 ">
                2
              </div>
            </div>

            <form action="">
              <div className="mt-4 w-[100%] h-[160px] border-2 border-[#EBEBEB] rounded-[8px] ">
                <textarea id='2xl'
                  cols="29"
                  rows="4"
                  className="hidden 2xl:block pl-[20px] pt-2 focus:outline-none text-[gray] border border-transparent"
                  defaultValue="Type Your Note"
                />

                <textarea id='xl'
                  cols="20"
                  rows="4"
                  className="lg:hidden 2xl:hidden xl:block pl-[20px] pt-2 focus:outline-none text-[gray] border border-transparent"
                  defaultValue="Type Your Note"
                />

                <textarea id='lg'
                  cols="18"
                  rows="4"
                  className="2xl:hidden xl:hidden lg:block pl-[9px] pt-2 focus:outline-none text-[gray] border border-transparent"
                  defaultValue="Type Your Note"
                />
    
                <hr />
                <button className="w-[100px] h-[35px] float-right mr-2 bg-[#06476D] mt-1 rounded-[5px] text-white">
                  Add Note
                </button>
              </div>
             </form>


            <div className="w-[100%] lg:h-[180px] xl:h-[170px] 2xl:h-[140px] border-2 border-[#EBEBEB] rounded-[8px] mt-8 text-[16px] font-[Avenir] ">
              <div className="flex items-center  h-[60px] pt-4 pl-4">
                <img src={calendar} className="w-[16px] h-[16px] mt-1  "  />
                <p className="ml-2" >Today, 10:00AM</p>
                <img src={deletes} className="w-[16px] h-[16px] mt-1 lg:ml-4 xl:ml-10 2xl:ml-[90px] " />
              </div><hr />
              <p className="text-[gray] text-[15px] font-[500] pl-4 pt-6 ">Applicant Address is not Verifiable and needs to be properly reviewed</p>
            </div>

            <div className="w-[100%] lg:h-[180px] xl:h-[170px] 2xl:h-[140px] border-2 border-[#EBEBEB] rounded-[8px] mt-8 text-[16px] font-[Avenir] ">
              <div className="flex items-center  h-[60px] pt-4 pl-4">
                <img src={calendar} className="w-[16px] h-[16px] mt-1  "  />
                <p className="ml-2" >Today, 10:00AM</p>
                <img src={deletes} className="w-[16px] h-[16px] mt-1 lg:ml-4 xl:ml-10 2xl:ml-[90px] " />
              </div><hr />
              <p className="text-[gray] text-[15px] font-[500] pl-4 pt-6 ">Applicant Number is not Verifiable and needs to be properly reviewed</p>
            </div><br /><br /><br /><br />
          </div>
        </div>
      </div>

      <div className= {`${imageCancel ? 'block' : 'hidden'} flex items-center mx-[15%] lg:mt-[-124vw] xl:mt-[-99vw] 2xl:mt-[-73vw]`}>
        <img className='' src={Image} alt="" />
        <img onClick={cancleClick} className='lg:mt-[-40vw] xl:mt-[-511px] 2xl:mt-[-33.3vw] lg:ml-[-7.2vw] xl:ml-[-6.8vw] 2xl:ml-[-87.6px] cursor-pointer' src={cancel} alt="" />
      </div>
    
    </div>
  )
}

export default Userpage
