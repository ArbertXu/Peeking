import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Testimonials from './assets/components/Testimonials';
import ImageButton from './assets/components/imageButton';
import ImageGallery from './assets/components/ImageGallery';
import "@fontsource/lexend-deca"; // Defaults to weight 400
import TermsAndConditions from './Pages/TermsAndCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Tips from './Pages/Tips';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeOut, Move, MoveOut, Sticky, Zoom } from 'react-scroll-motion';
import ContactUs from './Pages/ContactUs';
import './App.css';
import Footer from './assets/components/Footer';
import FlipCard from './assets/components/FlipCard';
import Statistics from './assets/components/Statistics';
import NewStatisticsCarousel from './assets/components/NewStatisticsCarousel';
import "@fontsource/nunito"; // Defaults to weight 400
import { useInView } from 'react-intersection-observer';
import AboutUs from './Pages/AboutUs'; // Import the About Us page

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  // Fade out effect for the "Quickly discover..." text
  const { ref: fadeOutRef, inView: isInViewFadeOut } = useInView({
   triggerOnce: false,
   threshold: 0,
 });

 const [fadeOut, setFadeOut] = useState(false);

 useEffect(() => {
   setFadeOut(!isInViewFadeOut); 
 }, [isInViewFadeOut]);

 // Fade effect for the "Here’s why we’re changing..." text
 const { ref: fadeInRef, inView: isInViewFadeIn } = useInView({
   triggerOnce: false,
   threshold: .5,
 });

 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
   setIsVisible(isInViewFadeIn); 
 }, [isInViewFadeIn]);

 const { ref: believeRef, inView: isInViewBelieve } = useInView({
   triggerOnce: false, 
   threshold: 0.1, 
 });


 
 // Detect orientation and display message if in landscape mode
 const [isLandscape, setIsLandscape] = useState(false);

 useEffect(() => {
  const handleOrientationChange = () => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    const isMobile = window.innerWidth <= 768;
    
    if (isMobileDevice && isMobile && window.innerWidth > window.innerHeight) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  window.addEventListener('resize', handleOrientationChange);
  return () => window.removeEventListener('resize', handleOrientationChange);
}, []);


 

 return (
   <div>
     {isLandscape && (
       <div className="landscape-warning">
         Please switch to portrait mode for the best experience.
       </div>
     )}
     <ScrollContainer>
       <ScrollPage>
         <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -800))}>
           <section className='App-Text'>
             <h1><span className='bold-text peeking-text'>Peeking</span></h1>
             <p className='jobSeekerText'><span className='bold-text'>Job-Seekers</span></p>
             <p>
               Find a fulfilling job quickly and without stress. 
             </p>
             <p className='EmployerText'><span className='bold-text'> Employers</span></p>
             <p> Find the candidate that makes your company thrive.</p>
           </section>
           <section className='App-download'>
             <a href="https://apps.apple.com/us/app/peeking/id6504951906" target="_blank" rel="noopener noreferrer">
               <img 
                 src='\Images\Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg' 
                 alt="Button Image" 
                 className="clickable-image"
               />
             </a>
           </section>
         </Animator>
       </ScrollPage>
       <section className='App-stats'>
              <h1 className={`fade-in-move ${isVisible ? 'visible' : ''}`} ref={fadeInRef}>
                Today's hiring process? <br></br><span className='bold-text'>It's not working.</span>
              </h1>
              <p>The Job-Seeker Perspective</p>
              <Statistics/>
            </section>
                <section className='App-stats1'>
                  <p>The Employer Perspective</p>
                  <NewStatisticsCarousel/>
                </section>
                <section className='App-slogan'>
             <p>We Bring Hope.</p>
           </section>
       <ScrollPage>
         <section className='App-content'>
           <FlipCard />
         </section>
       </ScrollPage>
       <section className='App-connect'>
         <h1>Finding your best match has never been easier</h1>
         <p><span className='bold-text'>It's on the go</span></p>
       </section>
       <section className='App-description' ref={fadeOutRef}>
         <p className={`fade-in-out ${fadeOut ? 'fade-out' : ''}`}>
         We focus on cultural and behavioral fit, helping you search new directions and get more exposure than ever before.
         </p>
       </section>
       <section
      className={`App-believe ${isInViewBelieve ? 'fade-in' : ''}`}
      ref={believeRef}
    >
      <img className='WebelieveImage' src='Images/Webelieve.png'></img>
    </section>
       <section className='App-Section'>
         <Testimonials />
         
       </section>
       {/* <section className='App-tips'>
         <div className="image-container">
           <img src='/Images/rocket.jpg' alt='Rocket Icon' className='rocket-icon' />
         </div>
         <h1><a href="/Tips"><span className='bold-text'>How to Maximize Peeking</span></a></h1>
         <span className='info-text'>(Available after launch)</span>
       </section> */}
       <section className='App-match'>
         <p>Let us get you a better match</p>
         <h2>#GetPeeking</h2>
       </section>
     </ScrollContainer>
   </div>
 );
}

function App() {
  
 return (
   <Router>
       <ScrollToTop />
     <div className='App'>
       <header className="App-header fixed-top">
         <ImageGallery />
       </header>
       
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/Tips" element={<Tips/>} />
         <Route path="/about-us" element={<AboutUs />} /> {/* New About Us route */}
       </Routes>
       <Footer/>
     </div>
   </Router>
 );
}

export default App;
