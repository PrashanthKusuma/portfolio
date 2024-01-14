import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
