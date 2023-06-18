import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Repos from "./Components/Repos";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }
  return (<>
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
    
    <button className="toggle" onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/repos" element={<Repos/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
