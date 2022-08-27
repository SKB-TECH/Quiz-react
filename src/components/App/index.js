import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from '../Header/index'
import Landing from "../Leanding";
import Footer from "../Footer";
import Welcom from "../Welcom";
import Login from "../Login";
import SignUp from "../SignUp";
import Error from "../Errors";
import ForgetPassword from "../ForgetPassword";

const App=()=>{
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Welcom" element={<Welcom/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
