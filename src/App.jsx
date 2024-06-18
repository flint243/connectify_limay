import React, {useContext, useState} from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./App.css";
import NavAccueil from "@layouts/NavAccueil";
import Footer from "@layouts/Footer";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Register2 from "@pages/Register2";
import Contact from "@pages/Contact";
import Walls from "@pages/profil-walls";
import Principal from "@pages/profil-principal";
import Gallery from "@pages/profil-gallery";
import Music from "@pages/profil-music";
import Video from "@pages/profil-video";
import PrivateHome from '@pages/Private/PrivateHome/PrivateHome';
import Private from '@pages/Private/Private'

const MyContext = React.createContext(null);

function App() {
  const contextValue = { basename: '/my-app' };

  return (
    <>
    <BrowserRouter>
      <NavAccueil/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register2 />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/profil"} element={<Principal />} />
          <Route path={"/walls"} element={<Walls />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/music"} element={<Music />} />
          <Route path={"/video"} element={<Video />} />
          <Route path={"/private"} element={<Private />}>
            <Route path="/private/private-home" element={<privateHome/>} />
          </Route>
        </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}


export default App;
