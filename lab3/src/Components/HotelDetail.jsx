import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../data/init.js';
import zdjecie from '../Assets/cards2.jpg';
import mail from '../Assets/mail.svg';

function HotelDetail() {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const fetchHotelData = async () => {
            const pathReference = ref(storage, 'data.json'); 

            try {
                const url = await getDownloadURL(pathReference);
                const response = await fetch(url);
                const hotels = await response.json();
                const foundHotel = hotels.find(h => h.id.toString() === hotelId); 
                if (foundHotel) {
                    setHotel(foundHotel);
                } else {
                    console.log("No such hotel!");
                }
            } catch (error) {
                console.error("Error fetching hotel data: ", error);
            }
        };

        fetchHotelData();
    }, [hotelId]);

    return (
        <section className="hero-section">
            <section id="hero" className="hero-browse">
                <article className="hero-cards">
                    <p className="title-large">{hotel ? hotel.name : 'Loading hotel details...'}</p>
                </article>
            </section>
            <section id="hero" className="grid hero-section">
                <div className="hero-image-containers" style={{backgroundImage: `url(${zdjecie})`}}></div>
                {hotel ? (
                    <article className="hero-detail">
                        <div className="text-middle">
                            <p><b>Location:</b> {hotel.location}</p>
                            <p><b>Local category:</b> {hotel.rating}</p>
                            <p><b>Price:</b> {hotel.price}/room</p>
                            <p><b>Description:</b></p>
                        </div>
                        <p className="text-middle">{hotel.description}</p>
                        <button className="button primary contact"><img src={mail} alt="Contact"/></button>
                        <div class="hero-cards">
                            <div class="card-image"></div>
                            <div class="card-image"></div>
                        </div>
                    </article>
                ) : (
                    <p>Loading hotel details...</p>
                )}
            </section>
        </section>
    );
}

export default HotelDetail;
