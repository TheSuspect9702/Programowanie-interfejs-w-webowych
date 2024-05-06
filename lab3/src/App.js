import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage';
import BrowseHotels from './Components/BrowseHotels';
import HotelDetail from './Components/HotelDetail';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse-hotels" element={<BrowseHotels />} />
          <Route path="/hotels/:hotelId" element={<HotelDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
