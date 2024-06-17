import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info">
              <h3>Contact Details</h3>
              <div className="info">
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>thenautiyal01@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 8006871160</p>
                </div>
                <div class="social-links mt-3">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="https://github.com/ruenautiyal" target="_blank" rel="noopener noreferrer" className="github"><i className="bi bi-github"></i></a>
                  <a href="https://www.linkedin.com/in/sakshi-nautiyal-006044306/" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <h3>Get in Touch</h3>
              <form action="https://script.google.com/macros/s/AKfycbw19vYRnbwXzA0RHtrZaZR2UDPUu1NCfvfK2v5Wswy7g8DzNsDZcwH6K4DElDuTsau1/exec" method="post" className="php-email-form">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

