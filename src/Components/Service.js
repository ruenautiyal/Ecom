import React from 'react';

export default function Service() {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>At OurCompany, we offer a range of services to meet your needs and exceed your expectations.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="service-item">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title">Web Development</h4>
              <p className="description">From simple websites to complex web applications, we design and develop customized solutions tailored to your business goals.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="service-item">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title">Graphic Design</h4>
              <p className="description">Our creative team specializes in graphic design services, including branding, logo design, and visual identity development.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="service-item">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title">Digital Marketing</h4>
              <p className="description">Maximize your online presence and reach your target audience with our digital marketing strategies, including SEO, SEM, and social media marketing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

