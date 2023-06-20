import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Repos from "./Components/Repos";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/repos" element={<Repos />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
