import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Running from '../pages/Running';
import Elements from '../pages/Elements';
import TemplateStatistics from '../pages/Templates/TemplateStatistics';
import Read from '../pages/Read';
import dataPerson from "../habits.json";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
const location = useLocation(); 
  
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/running" element={<Running />} />
          <Route path="/read" element={<Read />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/running/statistics" element={<TemplateStatistics data={dataPerson.myHabbits[0]} />} />
          <Route path="/read/statistics" element={<TemplateStatistics data={dataPerson.myHabbits[1]} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    );
}