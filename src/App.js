import React from "react";
import './App.css';

import SideMenu from "./SideMenu/SideMenu";

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Overview from './SideMenu/pages/Overview';

import Create from './CRUD/Create';
import Read from './CRUD/Read';
import Update from './CRUD/Update';
import View from "./CRUD/View";
import Login from "./Login/Login";


function App() {
  return (
    <>
      <div className="App">
      <Router>
      {/* <SideMenu/> */}
        <Routes>
          <Route path='/company/list' element={<Overview/>} />
          <Route path='/company/create' element={<Create/>}/>
          <Route path='/company/read' element={<Read/>}/>
          <Route path='/company/edit' element={<Update/>}/>
          <Route path="/company/view" element={<View/>}/>

          <Route path="*" element={<Navigate replace to="/"/>}/>
          <Route path="/" element={<Navigate replace to="/company/login"/>}/>
          
          <Route path="/company/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
