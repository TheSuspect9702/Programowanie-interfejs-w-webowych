import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../data/init.js';
import { BasketContext } from '../App.js';
import favorite from '../Assets/heartfilled.svg';
import notfavorite from '../Assets/heart.svg'

function Favorites() {
    const [hotels, setHotels] = useState([]);
    const { basket, dispatch } = useContext(BasketContext);
    const navigate = useNavigate();
    
    const handleViewOffer = (hotelId) => {
        navigate(`/hotels/${hotelId}`);
    };

    useEffect(() => {
        const fetchHotels = async () => {
            const pathReference = ref(storage, 'data.json');
            try {
                const url = await getDownloadURL(pathReference);
                const response = await fetch(url);
                const jsonData = await response.json();
                const favorites = jsonData.filter(hotel => basket.some(item => item.id === hotel.id));
                setHotels(favorites);
            } catch (error) {
                console.error("Failed to load hotels", error);
            }
        };

        if (basket.length > 0) {
            fetchHotels();
        }
    }, [basket]); 

    const toggleFavorite = (hotel) => {
        const isFavorite = basket.some(item => item.id === hotel.id);
        if (isFavorite) {
            dispatch({ type: 'remove_from_favorites', payload: { id: hotel.id } });
        } else {
            dispatch({ type: 'add_to_favorites', payload: hotel });
        }
    };

    const isHotelFavorite = (hotelId) => {
        return basket.some(item => item.id === hotelId);
    };

    return (
        <section id="browse" className="browse-section">
            <p className="title-middle">Favorite Hotels</p>
            <div className="grid hotel-cards">
                {hotels.length > 0 ? hotels.map(hotel => (
                    <article className="hotel-card" key={hotel.id}>
                       <div className="card-image">
                          <div className="heart">
                              <p className="text-small, chip">{hotel.location}</p>
                              <img src={isHotelFavorite(hotel.id) ? favorite : notfavorite} 
                              onClick={() => toggleFavorite(hotel)} className="chip" alt="favorite"/>
                          </div>
                        </div>
                        <p className="text-middle">{hotel.name}</p>
                        <p>{hotel.description}</p>
                        <div className="hotel-card-footer">
                            <p className="text-middle">{hotel.rating}</p>
                            <p className="text-middle">{hotel.price}</p>
                        </div>
                        <button className="button primary" onClick={() => handleViewOffer(hotel.id)}>View offer</button>
                    </article>
                )) : <p>No favorites added yet.</p>}
            </div>
        </section>
    );
}

export default Favorites;
