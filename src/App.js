import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Process from './pages/Process';
import Resources from './pages/Resources';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './components/Contact';
import Home from './pages/Home';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="page-content">
          <Routes>
            <Route path="/projects" Component={Projects} />
            {/*<Route path="/process" Component={Process} />
            <Route path="/resources" Component={Resources} />*/}
            <Route path="/" Component={About} />
            <Route path="/experience" Component={Experience} />
          </Routes>
        </div>
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
