import './assets/css/main.css';
import './assets/css/fonts.css';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Background from './components/Background';
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <div className='main-container flex whiteToBlackBg h-screen w-full relative z-[1]'>
        <Background />
        <Sidebar />
        <div className='content-navbar-container w-full h-full overflow-scroll'>
          <Navbar />
          <div className="content-container px-7">
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
