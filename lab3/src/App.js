import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage';
import BrowseHotels from './Components/BrowseHotels';
import HotelDetail from './Components/HotelDetail';
import Favorites from './Components/Favorites';
import './App.css';

const BasketContext = createContext();

const basketReducer = (state, action) => {
  try {
    switch (action.type) {
      case 'add_to_favorites':
        const updatedBasket = [...state, action.payload];
        localStorage.setItem('basket', JSON.stringify(updatedBasket));
        return updatedBasket;
      case 'remove_from_favorites':
        const filteredBasket = state.filter(item => item.id !== action.payload.id);
        localStorage.setItem('basket', JSON.stringify(filteredBasket));
        return filteredBasket;
      default:
        return state;
    }
  } catch (error) {
    console.error('Failed to update basket:', error);
    return state;
  }
};

export const BasketProvider = ({ children }) => {
  let initialState = [];
  try {
    initialState = JSON.parse(localStorage.getItem('basket')) || [];
  } catch (error) {
    console.error('Failed to parse basket items:', error);
  }
  
  const [basket, dispatch] = useReducer(basketReducer, initialState);

  return (
    <BasketContext.Provider value={{ basket, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContext };

function App() {
  return (
    <BasketProvider>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse-hotels" element={<BrowseHotels />} />
            <Route path="/hotels/:hotelId" element={<HotelDetail />} />
            <Route path="/favorite-offers" element={<Favorites/>} />
          </Routes>
        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;
