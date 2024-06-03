import React from 'react';
import BrowseHotels from './BrowseHotels';

function HomePage() {
  return (
    <section className="hero-section">
    <section id="hero" class="grid hero-section">
        <article class="hero-details">
            <p class="title-large">Your tranquillity oasis awaits</p>
            <p class="text-middle">TranquilTravels is designed to help you find a serene retreat for your next holidays. With us searching for the hotels nestled amidst picturesque landscapes is easier than ever. </p>
            <div class="hero-cards">
                <div class="card-image">
                    <p class="chip">New hotels <img src="./Assets/Arrow.svg"/></p>
                </div>
                <div class="card-image">
                    <p class="chip">Best reviews <img src="./Assets/Arrow.svg"/></p>
                </div>
            </div>
        </article>
        <div class="hero-image-container"></div>
    </section>
    <BrowseHotels></BrowseHotels>
    <section id="rent" class="footer grid">
        <div class="card-image"></div>
        <article class="footer-details">
            <p class="title-large">Rent with us!</p>
            <p class="text-middle">If you’re a hotel or an apartament owner who’s looking to reach more customers you can now rent your property with TranquilTravels. </p>
            <button class="button secondary">Learn more <img src="./Assets/Arrow.svg"/></button>
        </article>
    </section>
    </section>
  );
}

export default HomePage;
