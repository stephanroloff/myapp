import './assets/css/main.css';
import './assets/css/fonts.css';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Running from './pages/Running';
import Background from './components/Background';
import Elements from './pages/Elements';
import TemplateStatistics from './pages/Templates/TemplateStatistics';
import Read from './pages/Read';
import dataPerson  from "./habits.json";

function App() {

  console.log(dataPerson.myHabbits[0]);
  

  return (
    <Router>
    <div className='main-container flex whiteToBlackBg h-screen w-full relative z-[1]'>
        <Background/>

        <Sidebar/>
        <div className='content-navbar-container w-full h-full overflow-scroll'>
          <Navbar/>
          <div className="content-container px-7">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/running" element={<Running />} />
              <Route path="/read" element={<Read />} />
              <Route path="/elements" element={<Elements />} />
              <Route path="/running/statistics" element={<TemplateStatistics data={dataPerson.myHabbits[0]}/>} />
              <Route path="/read/statistics" element={<TemplateStatistics data={dataPerson.myHabbits[1]}/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
    </div>
    </Router>
  )
}

export default App
