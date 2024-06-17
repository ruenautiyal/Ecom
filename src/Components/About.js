import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h3>Get to Know Me</h3>
              <p>
                Greetings! I'm Sakshi Nautiyal, a technology enthusiast with a heart for social impact. Hailing from the culturally vibrant city of Mathura, Uttar Pradesh, I've been on a journey fueled by curiosity and passion.
              </p>
              <p>
                Currently pursuing a B.Tech in Computer Science with a focus on Blockchain technology, I'm dedicated to leveraging cutting-edge innovations to tackle real-world challenges. I thrive on creating, scaling, and optimizing business strategies that leave a lasting mark.
              </p>
              <ul className="contact-info">
                <li><strong>Birthday:</strong> 28 Feb 2005</li>
                <li><strong>City:</strong> Mathura, Uttar Pradesh</li>
                <li><strong>Age:</strong> 19</li>
                <li><strong>Degree:</strong> Undergraduate Student</li>
                <li><strong>Freelance:</strong> Available</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
