import { useState } from "react"
import Logo from '../../assets/Beual-logo.png'




function Signin(){
    const[form, setForm]= useState({
        username: "",
        password:""
    });
    const handleClick =(e)=>{
      const{name,value} = e.target;
      setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(Validation(form));
        if (Object.keys(Validation(form)).length === 0) {
          alert("form successfully submited")
          console.log(form);
        }
    }
    return(
        <>
        <div className="w-[100vw] h-[100vh]  flex  " >
            <div className="w-[60vw] h-[100%] pt-[21%]"  style={{background: 'linear-gradient(180deg, #318ABE 0%,#0D4363 84.79%, #06344E 100%)',}} >

                <div className=" flex pl-16 gap-[16px] items-center text-white ">
                    <img src={Logo} className="w-[50px] h-[50px]" />
                    <p className="font-[800] text-[32px] font-[Avenir] " >Beaulah Destiny Club</p>
                </div><br />

                <div className="flex">
                    <p className="w-[350px] border-[#e2e0e0] -ml-10 h-[345px] mt-8 border-[1px] border-b-0  border-l-0 b bg-transparent rounded-[360px]"></p>
                    <p className="w-[345px] border-[#e2e0e0] -ml-[40%] h-[355px] border-[1px] border-b-0  border-l-0 b bg-transparent rounded-[360px]"></p>
                </div>
            </div>

            <div className="w-[40vw] h-[100%] bg-white pt-[140px] px-[80px]" >
                <h1 className="text-[32px] font-[800] font-[Avenir]">Welcome, Admin</h1>
                <p className="text-[16px] font-[350] text-gray-400 mt-2">Please enter your details</p>
                <form onSubmit={handleSubmit} action=""className="mt-[20px]" >
                    <div className="text-[17px] font-[600px]" >
                    <label htmlFor="Username" className="text-gray-400" >Username</label><br />
                    <input type="text" name="username"
                    value={form.username}
                    onChange={handleClick} id="" className="border border-gray-300 bg-gray-100 focus:outline-none pl-[16px] w-[100%] h-[50px] rounded-[5px]"  /><br />
                     
                   </div>
                    <div className="mt-[40px] text-[17px] font-[600px]">
                    <label htmlFor="Username" className="text-gray-400" >Password</label><br />
                    <input type="text" name="password"
                    value={form.password}
                    onChange={handleClick} id="" className="border border-gray-300 bg-gray-100 focus:outline-none pl-[16px]  w-[100%] h-[50px] rounded-[5px]  "  />
                    <p className="mt-[20px] text-[14px]" >Don't remember Password?<a href=""className="ml-1" ><b>Reset here</b></a></p>
                    </div>
                    <button type="submit" className="w-[120px] h-[45px] text-[18px] pl-1 font-[800] mt-[20px] float-right bg-[#06476D] text-white rounded-[10px] " >Sign In</button>
                </form>
            </div>

        </div>
        </>
    )
}
export default Signin