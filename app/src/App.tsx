import './assets/css/main.css';
import './assets/css/fonts.css';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Running from './Pages/Running';

function App() {

  return (
    <Router>
    <div className='main-container flex whiteToBlackBg h-screen w-full'>
        <Sidebar/>
        <div className='content-navbar-container w-full h-full'>
          <Navbar/>
          <div className="content-container px-7">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Running />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
    </div>
    </Router>
  )
}

export default App
