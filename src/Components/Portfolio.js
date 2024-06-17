import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Discover My Work</h2>
          <p>Explore my diverse portfolio showcasing our creative solutions and innovative projects.</p>
        </div>

        <div className="row portfolio-container">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-3.png.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Project 1</h4>
              <p>Kish Token</p>
            </div>
            <div className="portfolio-links">
              <a href="https://github.com/ruenautiyal/kish.git" data-gallery="portfolioGallery"
                className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
              
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-4.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Project 2</h4>
              <p>Camera Access</p>
            </div>
            <div className="portfolio-links">
              <a href="https://github.com/ruenautiyal/Camera-access.git" data-gallery="portfolioGallery"
                className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-5.png" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Project 3</h4>
              <p>UseEffect</p>
            </div>
            <div className="portfolio-links">
              
              <a href="https://github.com/ruenautiyal/useEffect-main.git" data-gallery="portfolioGallery"
                className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
              
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Project 4</h4>
              <p>Password Hashing</p>
            </div>
            <div className="portfolio-links">
              <a href="https://github.com/ruenautiyal/password-hashing.git" data-gallery="portfolioGallery"
                className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
            </div>
          </div>
        </div>

          {/* Add more portfolio items here */}

        </div>

      </div>
    </section>
  );
}
