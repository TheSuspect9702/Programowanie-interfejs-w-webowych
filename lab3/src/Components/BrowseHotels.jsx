import React from 'react';
import { useNavigate } from 'react-router-dom';
import {hotels} from '../data.js';
function BrowseHotels() {
  const navigate = useNavigate();

  const handleViewOffer = (hotelId) => {
    navigate(`/hotels/${hotelId}`);
  };
    return (
        <section id="browse" className="browse-section">
            <p className="title-middle">Explore the hotels</p>
            <div className="grid hotel-cards">
                {hotels.map(hotel => (
                    <article className="hotel-card" key={hotel.id}>
                       <div className="card-image">
                          <div className="heart">
                              <p className="text-small, chip">{hotel.location}</p>
                              <p className='chip'><img src={hotel.heart}></img></p>
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