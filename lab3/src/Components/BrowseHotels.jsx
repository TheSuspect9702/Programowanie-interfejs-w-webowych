import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../data/init.js';


function BrowseHotels() {
    const [hotels, setHotels] = useState([]);
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
                setHotels(jsonData); 
            } catch (error) {
                console.error("Failed to load hotels", error);
            }
        };

        fetchHotels();
    }, []);

    
    return (
        <section id="browse" className="browse-section">
            <p className="title-middle">Explore the hotels</p>
            <div className="grid hotel-cards">
                {hotels.map(hotel => (
                    <article className="hotel-card" key={hotel.id}>
                       <div className="card-image">
                          <div className="heart">
                              <p className="text-small, chip">{hotel.location}</p>
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
                ))}
            </div>
        </section>
    );
}

export default BrowseHotels;