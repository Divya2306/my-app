
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been activated","success");
      document.title="React: Dark Mode";
      // setTimeout(()=>{
      //   document.title="hello";
      // },2000)
      // setTimeout(()=>{
      //   document.title="bye";
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been activated","success");
      document.title="React: Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Travel" aboutText="About places" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<TextForm title="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
          </Routes>
          {/* <TextForm showAlert={showAlert} title="Enter text to analyze below" mode={mode} /> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
