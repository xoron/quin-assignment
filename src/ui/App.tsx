import React, { FC } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import AppDrawer from './components/mulecules/AppDrawer';
import Home from './components/pages/Home';
import Launches from './components/pages/Launches';

const App: FC = () => (
  <BrowserRouter>
    <AppDrawer>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/*" element={<Navigate replace to="/home" />} />
      </Routes>
    </AppDrawer>
  </BrowserRouter>
);

export default App;
