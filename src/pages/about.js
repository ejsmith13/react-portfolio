import React from "react";
import Headshot from "../assets/images/head_shot_thumbnail.jpg";
import Resume from "../assets/pdf/resume.pdf";

const About = () => {
  return (
    <div>
      <main className="container">
        <section className="row">
          {/* <!-- style row with blue text, bold, and bottom border --> */}
          <h1 className="col-md-8 head font-weight-bold border-bottom border-dark">
            About me
          </h1>
        </section>
        <section className="row">
          <div className="col-md-10">
            <h2>Biography</h2>
            {/* <!-- thumbnail image --> */}
            <img
              src={Headshot}
              alt="Ethan Smith"
              className="img-thumbnail float-left"
              id="headshot"
            />
            <p>
              My name is Ethan Smith, and I am currently enrolled in the
              University of Richmond's coding bootcamp. I enjoy working with
              technology and learning new skills. After I have completed the
              coding program, I hope to have the skills to work as a full-stack
              web developer.
            </p>
            <p>
              In my free time, I enjoy spending time outdoors. My favorite
              activities include hiking, skiing, and exploring new places. I am always
              excited to try new things and meet new people. If you would like
              to contact me please use links below or the form on the contact
              page.
            </p>

            <h2>
             Technologies
            </h2>
            <ul>
              <li>
                REACT
              </li>
              <li>
                MongoDB and MySQL
              </li>
              <li>
                Node js
              </li>
              <li>
                Express js
              </li>
              <li>
                HTML 5 and CSS 3
              </li>
              <li>
                JavaScript
              </li>
              <li>
                and currently studying Python
              </li>
            </ul>
            <h2>Links:</h2>

            <div className="row">
              {/* <!-- resume --> */}
              <figure className="col-md-4">
                <a id="resume" href={Resume}>
                  Resume
                </a>
              </figure>

              {/* <!-- social media links --> */}
              <figure className="col-md-4">
                <a
                  id="linkedIn"
                  href="https://www.linkedin.com/in/ethan-smith-b75b8183/"
                >
                  LinkedIn
                </a>
              </figure>
              <figure className="col-md-4">
                <a id="github" href="https://github.com/ejsmith13">
                  GitHub
                </a>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
