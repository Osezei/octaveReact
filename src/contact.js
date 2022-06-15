import "./index.css";
import logo from "./img/fave.ico";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="head-text">
          <h3>contact us</h3>
        </div>

        <div className="contact-section">
          <div className="message">
            <img src={logo} className="logo" alt="logo" />
            <br />
            <p>Come and be mindblown by our very affordable designs.</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>
              <i className="fas fa-phone-alt"></i>555.769.3314
            </p>
            <p>
              <i className="far fa-envelope"></i>octave@gmail
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>1674 Union street
            </p>
            <p>New York, USA</p>
          </div>

          <div>
            <h4>Follow us on</h4>
            <p>
              <a href="#">
                <i className="fab fa-twitter"></i>Twitter
              </a>
            </p>

            <p>
              <a href="#">
                <i className="fab fa-facebook-f"></i>Facebook
              </a>
            </p>

            <p>
              <a href="#">
                <i className="fab fa-youtube"></i>YouTube
              </a>
            </p>

            <p>
              <a href="#">
                <i className="fab fa-linkedin"></i>linkedin
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
