import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './statistics.css'; // Import custom styles

function NewStatisticsCarousel() {
    return (
        <div id="newStatisticsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3><span className='bold-text'>80%</span> of resumes are inaccurately fluffed.</h3>
                        <h4 className='italic-text'>So who are employers actually hiring?</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3>Referred candidates are <span className='bold-text'>40%</span> more likely to stay.</h3>
                        <h4 className='italic-text'>Since they are usually better cultural fits</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3>Employers review <span className='bold-text'>100</span> applications to make <span className='bold-text'>1</span> job offer.</h3>
                        <h4 className='italic-text'>Valuable time, often spent on a hire that’s not the best fit.</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3>A bad hire costs a company <span className='bold-text'>thousands of dollars.</span></h3>
                        <h4 className='italic-text'>Incorrect matches are financially draining</h4>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#newStatisticsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#newStatisticsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#newStatisticsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#newStatisticsCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#newStatisticsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#newStatisticsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default NewStatisticsCarousel;
