/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
     <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
      </Routes>
      </Router>
     
      
    </>
  );
}

export default App;
