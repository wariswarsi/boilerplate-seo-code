import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Home';
import AboutPage from './About';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App