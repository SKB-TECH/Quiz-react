import React from "react";
import Header from '../Header/index'
import Landing from "../Leanding";
import Footer from "../Footer";
import Welcom from "../Welcom";
import Login from "../Login";
import SignUp from "../SignUp";
import Error from "../Errors";

const App=()=>{
  return (
    <div>
      <Header/>

      <Welcom/>
      <Landing/>
      <Login/>
      <SignUp/>
      <Error/>

      <Footer/>

    </div>
  );
}

export default App;
