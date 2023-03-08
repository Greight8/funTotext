import React from "react";
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// importing react router here
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  // 1) to set dark , light mode in navbar
  const [mode, setMode] = useState("light");

  const [modeText, setModeText] = useState("Dark Mode");

  // making toggleMode func to change mode, it is used inside our switch inside onClick event listner
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setModeText("Dark Mode");
      // showAlert("Dark mode enabled", "success ");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setModeText("Dark Mode");
      // showAlert("Light mode enabled", "success ");
    }
  }

  // 2) to set alert message
  const [alert, setAlert] = useState(null);

  // here type means success, danger etc these are alert classes in bootstrap
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        {/* 1) 1st component navbar */}
        <Navbar title="funTotext" aboutText="About us" mode={mode} toggleMode={toggleMode} modeText={modeText} />

        {/* 4) 4th component Alert component */}
        <Alert alert={alert} />

        <div className="container my-3 d-flex text-center" style={{ flexDirection: "column" }}>
          {/* making react routes here */}
          <Routes>
            <Route exact path="/about"
              // 3) 3rd component About 
              element={<About mode={mode} />}
            />
            <Route exact path="/"
              // 2) 2nd component textform, container is a property of bootstarp 
              element={<TextForm heading="funTotext - Count Words & Correct Writing" mode={mode} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
