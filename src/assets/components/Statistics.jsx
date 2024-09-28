import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './statistics.css'; // Import custom styles

function StatisticsCarousel() {
    return (
        <div id="statisticsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3>Only <span className='bold-text'>1%</span> of applications result in a job offer</h3>
                        <h4 className='italic-text'> Meaning 99% go to waste</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3>Nearly <span className='bold-text'>half</span> of today’s job-postings don’t actually exist.</h3>
                        <h4 className='italic-text'>Employers just need to meet quotas and generate leads!</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3><span className='bold-text'>80-90%</span> of job-applications get no response. </h3>
                        <h4 className='italic-text'>When they do, it’s usually a delayed rejection.</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3>Each application takes <span className='bold-text'>10-30</span> minutes to complete.</h3>
                        <h4 className='italic-text'>Now multiply that by 100+ applications.</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="custom-carousel-text d-block w-100 text-center p-4">
                        <h3>Referred candidates are <span className='bold-text'>4x</span> more likely to get the job.</h3>
                        <h4 className='italic-text'>Because the employer has a feel for who they are.</h4>
                    </div>
                </div>
                
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#statisticsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#statisticsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#statisticsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#statisticsCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#statisticsCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#statisticsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#statisticsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default StatisticsCarousel;
