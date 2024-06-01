import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../data/init.js';
import zdjecie from '../Assets/cards2.jpg';
import mail from '../Assets/mail.svg';

function HotelDetail() {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [messageSent, setMessageSent] = useState(false); 

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleMessageChange = (event) => {
        setMessage(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setMessageSent(true); 
      };
    
      const toggleForm = () => {
        setShowForm(!showForm);
        if (showForm) { 
          setMessageSent(false);
        }
      };

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
                        <button onClick={toggleForm}  className="button primary contact">
                            <img src={mail} alt="Contact"/>
                        </button>   
                        {showForm && (
                            messageSent ? (
                            <p>Wysłano!!!</p>
                            ) : (
                                <form onSubmit={handleSubmit} className="formStyle" >
                                    <label htmlFor="email">Owner's Email:</label>
                                    <input type="email" id="email" className="inputStyle" value={email} onChange={handleEmailChange} required />
                                    <br></br>
                                    <br></br>
                                    <label htmlFor="message">Your Message:</label>
                                    <textarea id="message" className="inputStyle" value={message} onChange={handleMessageChange} required />
                                    <button type="submit" className="button primary contact">Wyślij</button>
                                </form>
                            )
                        )}
                        
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
