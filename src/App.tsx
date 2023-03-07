import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Homepage/>}></Route>
            <Route path={"/about"} element={<About/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
