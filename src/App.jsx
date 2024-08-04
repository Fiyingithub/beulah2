import { useState, useEffect } from 'react'
import Sidebar from './component/Sidenav.jsx';
import Home from './component/Pages/Home.jsx';
import Membership from './component/Pages/Membership.jsx';
import Userpage from './component/Pages/Userpage.jsx';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Signin from './component/Signin/Signin.jsx';








function App() {
  useEffect(()=>{
    document.body.style.backgroundColor = '#EBEBEB';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
  },[]);

  return (
    <div>
      <BrowserRouter>
        <Sidebar/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/membership' element={<Membership/>} />
          <Route path='/userpage' element={<Userpage/>} />
        </Routes>
        {/* <Signin/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
