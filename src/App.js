import React from "react";
import Main from "./Components/Main";
import './Components/style.css';
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom"
import Search from "./Components/Search";

function App() {
  return (
    <>
    < Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
