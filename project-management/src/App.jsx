import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<ProjectList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
