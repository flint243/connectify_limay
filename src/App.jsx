import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import Header from '@layouts/Header'
import Footer from "@layouts/Footer";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Register2 from "@pages/Register2";
import Contact from "@pages/Contact";

const MyContext = React.createContext(null);

function App() {
  const contextValue = { basename: '/my-app' };

  return (
    <>
     <MyContext.Provider value={contextValue}>

      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register2 />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </Router>
     <Footer/>
      </MyContext.Provider>
    </>
  );
}


export default App;
