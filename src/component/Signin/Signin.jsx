import { useState } from "react";
import Validation from "./Validation";
import Logo from '../../assets/Beual-logo.png'

function Signin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(form));
    if (Object.keys(Validation(form)).length === 0) {
      alert("welcome");
    }
  };
  return (
    <>
      <div className="w-[100vw] h-[100vh]  flex  ">
        <div
          className="w-[60vw] h-[100%] lg:pt-[55vh] xl:pt-[26%] 2xl:pt-[21%]"
          style={{
            background:
              "linear-gradient(180deg, #318ABE 0%,#0D4363 84.79%, #06344E 100%)",
          }}
        >
          <div className=" flex pl-16 gap-[16px] items-center text-white ">
            <img src={Logo} className="w-[50px] h-[50px]" />
            <p className="font-[800] text-[32px] font-[Avenir] ">
              Beaulah Destiny Club
            </p>
          </div>
          <br />

          <div className="flex">
            <p className="lg:w-[250px] xl:w-[300px] 2xl:w-[350px] lg:h-[250px] xl:h-[300px] 2xl:h-[345px] border-[#e2e0e0] -ml-10  mt-8 border-[1px] border-b-0  border-l-0 b bg-transparent rounded-[360px]"></p>
            <p className="lg:w-[250px] xl:w-[300px] 2xl:w-[345px] lg:h-[250px] xl:h-[300px] 2xl:h-[355px] border-[#e2e0e0] -ml-[40%]  border-[1px] border-b-0  border-l-0 b bg-transparent rounded-[360px]"></p>
          </div>
        </div>

        <div className="w-[40vw] h-[100%] bg-white pt-[140px] px-[80px]">
          <h1 className="text-[32px] font-[800] font-[Avenir]">
            Welcome, Admin
          </h1>
          <p className="text-[16px] font-[350] text-gray-400 mt-2">
            Please enter your details
          </p>
          <form onSubmit={handleSubmit} action="" className="mt-[20px]">
            <div className="text-[17px] font-[600px]">
              <label htmlFor="Username" className="text-gray-400">
                Username
              </label>
              <br />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                id=""
                className="border border-gray-300 bg-gray-100 focus:outline-none pl-[16px] w-[100%] h-[50px] rounded-[5px]"
              />
              <br />
              {errors.username && (
                <span className={`text-red-500`}>{errors.username}</span>
              )}
            </div>
            <div className="mt-[40px] text-[17px] font-[600px]">
              <label htmlFor="Username" className="text-gray-400">
                Password
              </label>
              <br />
              <input
                type="text"
                name="password"
                value={form.password}
                onChange={handleChange}
                id=""
                className="border border-gray-300 bg-gray-100 focus:outline-none pl-[16px]  w-[100%] h-[50px] rounded-[5px]  "
              />
              {errors.password && (
                <span className={`text-red-500`}>{errors.password}</span>
              )}
            </div>
            <p className="mt-[20px] text-[14px]">
              Don't remember Password?
              <a href="" className="ml-1">
                <b>Reset here</b>
              </a>
            </p>

          <a href="Membership">  <button
              type="submit"
              className="w-[120px] h-[45px] text-[18px] pl-1 font-[800] mt-[20px] float-right bg-[#06476D] text-white rounded-[10px] "
            >
              Sign In
            </button></a>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signin;
