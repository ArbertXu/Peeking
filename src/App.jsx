import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Testimonials from './assets/components/Testimonials';
import ImageButton from './assets/components/imageButton';
import ImageGallery from './assets/components/ImageGallery';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky, Zoom } from 'react-scroll-motion';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className="App-header fixed-top">
        <ImageGallery />
      </header>
      
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), Move(0, -10))}>
            <section className='App-Text'>
              <h1>Peeking</h1>
            </section>
          </Animator>
        </ScrollPage>
        
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), Move(0, -100))}>
            <section className='App-slogan'>
              <p>Stress free employment</p>
            </section>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <section className='App-content'>
            <div className='App-img'>
              <img src='Images/screen.jpg' alt="Screen" className='center'/>
            </div>
            <div className='App-text'>
              <p>Your paragraph of text goes here. This text will be displayed to the right of the image.</p>
            </div>
          </section>
        </ScrollPage>

        <ScrollPage>
          <section className='App-section'>
            <Testimonials />
          </section>
        </ScrollPage>
        
        <ScrollPage>
          <section className='App-button'>
            <ImageButton />
          </section>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;