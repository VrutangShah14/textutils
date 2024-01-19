import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#395B64';
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setTimeout(() => {
        document.title = 'TextUtils - Home'
      }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtils - Home'
      // }, 300);
      // setInterval(() => {
      //   document.title = 'TextUtils - Heya Mode'
      // }, 500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'TextUtils - Light Mode';
      setTimeout(() => {
        document.title = 'TextUtils - Home'
      }, 1500);
    }
  }

  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode={mode} toggleMode={toggleMode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
