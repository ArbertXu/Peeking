
import React, { useState } from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from './assets/components/Testimonials';
// import Statistics from './components/Statistics';
import ImageGallery from './assets/components/ImageGallery';
// import AppStoreRedirect from './components/AppStoreRedirect';

function App() {

  return (
    <div className='App'>
      <header className="App-header">
        <ImageGallery/>
      </header>
      <main>
        <section>
          <Testimonials/>
        </section>
      </main>

    </div>
  )
}

export default App;