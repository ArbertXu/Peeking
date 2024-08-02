import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Testimonials from './assets/components/Testimonials';
import ImageButton from './assets/components/imageButton';
import ImageGallery from './assets/components/ImageGallery';
import {Animator, ScrollContainer, ScrollPage} from 'react-scroll-motion';

import './App.css';
function App() {
  return (
    <div className='App'>
      <header className="App-header fixed-top">
        <ImageGallery />
      </header>
      <section className='App-Text'>
      <h1>Peeking</h1>
        </section>  
        <section className='App-slogan'>
        <p>Stress free employment</p>
        </section>
      <main>
        <section className='App-img'>
        <img src='Images/screen.jpg' alt="Screen" className='center'/>
        </section>
      <section className='App-section'>
          <Testimonials />
      </section>
      <section className='App-button'>
        <ImageButton/>
      </section>
      </main>
    </div>
  );
}

export default App;