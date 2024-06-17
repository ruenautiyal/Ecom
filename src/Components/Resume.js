import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="resume section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Welcome to my resume page. Below you'll find information about my education, work experience, and skills.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Sakshi Nautiyal</h4>
              <p><em>Passionate and dedicated web developer with a focus on creating user-friendly and visually appealing websites. Experienced in front-end and back-end development, with a strong background in problem-solving and collaboration.</em></p>
              <ul>
                <li>Location: Mathura, Uttar Pradesh</li>
                <li>Email: thenautiyal01@gmail.com</li>
                <li>Phone: +91 8006871160</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5>2022 - 2026</h5>
              <p><em>GLA UNIVERSITY, MATHURA</em></p>
              <p>Relevant coursework: Web Development, Database Management and Blockchain</p>
            </div>
            <div className="resume-item">
              <h4>Intermediate</h4>
              <h5>2020 - 2022</h5>
              <p><em>Green Willow Public School, Mathura</em></p>
              <p>Graduated with honors</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Skills</h3>
            <div className="resume-item">
              <h4>Technical Skills</h4>
              <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js, Node.js</li>
                <li>Bootstrap, Tailwind CSS</li>
                <li>SQL, MongoDB</li>
                <li>Git, GitHub</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Soft Skills</h4>
              <ul>
                <li>Effective communication</li>
                <li>Problem-solving</li>
                <li>Team collaboration</li>
                <li>Time management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
