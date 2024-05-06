import React from 'react';
import { useParams } from 'react-router-dom';
import {hotels} from '../data.js';
import zdjecie from '../Assets/cards2.jpg';
import mail from '../Assets/mail.svg';
function HotelDetail() {
    const { hotelId } = useParams();
    const hotel = hotels.find(h => h.id.toString() === hotelId);
  return (
    <section className="hero-section">
    <section id="hero" class="hero-browse">
        <article class="hero-cards">
            <p className="title-large">{hotel.name}</p>
        </article>
    </section>
    <section id="hero" class="grid hero-section">
        <div class="hero-image-containers" style={{backgroundImage: {zdjecie}}}></div>
        <article class="hero-detail">
            <div class="text-middle">
                <p><b>Location:</b> {hotel.location}</p>
                <p><b>Local category:</b> {hotel.rating}</p>
                <p><b>Price:</b> {hotel.price}/room</p>
                <p><b>Description:</b></p>
            </div>
            <p class="text-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mi vehicula, fermentum magna non, semper ipsum. 
                In vehicula neque mi, sit amet bibendum magna vehicula nec. Proin at magna aliquam, maximus orci quis, euismod eros. 
                Ut facilisis sapien est, non placerat orci pharetra non. Donec quis nulla vel urna tincidunt dictum. 
                Quisque volutpat, lectus nec iaculis euismod, augue massa consequat enim, nec pharetra massa massa nec ipsum.
            </p>
            <button class="button primary contact">Contact<img src={mail}/></button>
            <div class="hero-cards">
                <div class="card-image">
                </div>
                <div class="card-image">
                </div>
            </div>
        </article>
    </section>
    </section>
  );
}

export default HotelDetail;
