import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Elements from '../pages/Elements';
import TemplateStatistics from '../pages/Templates/TemplateStatistics';
import dataPerson from "../fetch/habits.json";
import { AnimatePresence } from "framer-motion";
import TemplateEdit from '@/pages/Templates/TemplateEdit';
import { DataPerson } from '../types/index.types';
import TemplateGeneral from '@/pages/Templates/TemplateGeneral';
import React from 'react';

export default function AnimatedRoutes() {
  const location = useLocation(); 
  const allMyHabbits: DataPerson = dataPerson.myHabbits;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        {allMyHabbits.map((data, index) => (
          <React.Fragment key={index}>
            <Route path={`/${data.url}`} element={<TemplateGeneral data={data} />} />
            <Route path={`/${data.url}/statistics`} element={<TemplateStatistics data={data} />} />
            <Route path={`/${data.url}/edit`} element={<TemplateEdit data={data} />}  />
          </React.Fragment>
        ))}

        <Route path="/elements" element={<Elements />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
