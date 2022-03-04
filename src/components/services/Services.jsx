import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Strategy and Consulting</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App Design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User Testing</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframes & Blueprints</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross Platform Compatibility</p>
            </li>
          </ul>
        </article>

        {/*END OF UI/UX*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Web Applications Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>REST API Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Opensource Framework Experts</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Hire Web Experts</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Progressive Web Apps</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Posts</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Long-form content.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Online guides</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Infographics</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Micrographics</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Videos</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
