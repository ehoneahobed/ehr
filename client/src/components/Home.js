import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

const Home = () => {
  return (
    <div className="home">
      <nav className="home__nav">
        <h3 className="home__nav-title">myEHR</h3>
        <div className="home__nav-right">
          <ul className="home__nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <Link to="/login">
            <button className="home__nav-btn">Sign in</button>
          </Link>
        </div>
      </nav>
      <section className="home__hero">
        <div className="home__hero-top">
          <h1>
            Your Health Data With <br />
            You <span>Everywhere</span>{" "}
          </h1>
          <p>
            Access your vital health data anytime, anywhere with our emergency
            health data storage platform. Store your medical records, emergency
            contacts, allergies, and health conditions in one secure and
            easy-to-use platform.
          </p>
        </div>
        <div className="home__hero-middle">
          <Link to="/register">
            <button className="home__btn btn-getStarted">Get Started</button>
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            <button className="home__btn btn-watchDemo">Watch Demo</button>
          </Link>
        </div>
        <div className="home__hero-bottom">
          <img src="/images/publichealth.png" alt="Public Health" />
        </div>
      </section>

      <section className="home__section1">
        <div className="home__section1-top">
          <h5>SECURED</h5>
          <h2>Why You Need myEHR</h2>
          <p>
            We provide a comprehensive solution for securely storing your
            medical information, which can be easily accessed during an
            emergency
          </p>
        </div>
        <div className="home__section1-bottom">
          <article>
            <img src="/images/article1.png" alt="Reason 1" />
            <p>
              Get quick access to one's health data in case of a medical
              emergency
            </p>
          </article>
          <article>
            <img src="/images/Article2.png" alt="Reason 2" />
            <p>Easily store and manage all your health records in one place</p>
          </article>
          <article>
            <img src="/images/Article3.png" alt="Reason 3" />
            <p>No need for carrying around physical documents or files.</p>
          </article>
        </div>
      </section>
      <section className="home__section2">
        <article className="home__section2-top">
          <img src="/images/prescription.png" alt="Prescription" />
          <div>
            <h3>User-friendly Health Data System</h3>
            <p>
              With our user-friendly health data system, users can easily input
              and access their health data whenever they need it. The system is
              designed to be intuitive and easy to use, even for those who are
              not tech-savvy.
            </p>
          </div>
        </article>
        <article className="home__section2-top">
          <div>
            <h3>Keep your health insurance data handy</h3>
            <p>
              Our platform allows you to store your health insurance information
              securely and access it easily in case of an emergency. This
              feature ensures that you can quickly provide your insurance
              details to healthcare providers, allowing them to better
              understand your coverage and reduce the potential for
              out-of-pocket expenses.
            </p>
          </div>
          <img src="/images/insurance.png" alt="insurance" />
        </article>
      </section>

      <section className="home__section3">
        <h3>Our Story</h3>
        <article>
          <img src="/images/story.png" alt="Our Story" />
          <p>
            As a healthcare professional, I have regularly witnessed the
            challenges that patients face when seeking timely medical attention
            in emergency situations. <br />
            <br />
            One of the most significant obstacles that they face is the lack of
            access to their critical health information when it is needed the
            most. <br />
            <br />
            Inspired by this recurring problem, we set out to create a platform
            that would provide patients with easy access to their health data,
            regardless of their location or time of day. <br />
            <br />
            We understand that in a medical emergency, every second counts, and
            our goal was to provide a solution that would help patients receive
            the care they need as quickly as possible. <br />
            <br />
            Our passion for improving healthcare outcomes drove us to create a
            user-friendly and secure platform that could store patients'
            critical health information, including medical history, allergies,
            and insurance.
            <br />
            <br />
            With this platform, patients can access their health data at any
            time and share it with healthcare professionals whenever needed,
            ensuring that they receive the most effective treatment in the
            shortest possible time. <br />
            <br />
            At our core, we are committed to providing innovative and practical
            solutions that improve patient outcomes and increase accessibility
            to healthcare services. <br />
            <br />
            Our platform is a testament to this commitment, and we are excited
            to continue exploring new ways to enhance the delivery of healthcare
            services.
          </p>
        </article>
      </section>

      <section className="home__section4">
        <h2>
          Easy Access to Your Health in <br />
          Case of a Health Crisis
        </h2>
        <p>
          In case of an emergency, health professionals can quickly access your
          health data to make informed decisions about your care. With our
          platform, you can have peace of mind knowing that your health
          information is always up-to-date and accessible in case of an
          emergency.
        </p>
        <Link to="/register">
          <button className="home__btn btn-getStarted">Get Started</button>
        </Link>
      </section>
      <footer className="home__footer">
        <p>Copyright &#169; 2023</p>
      </footer>
    </div>
  );
};

export default Home;
