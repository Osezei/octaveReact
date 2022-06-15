import "./index.css";
import image4 from "./img/image4.jpg";
import image5 from "./img/image5.jpg";
import image6 from "./img/image6.jpg";

const LowerBody = () => {
  return (
    <>
      <div className="lowerBody">
        <div className="head-text">
          <h3>why octave?</h3>
        </div>
        <div className="contentWithPics animate__animated animate__bounceInUp">
          <div className="services">
            <div className="servicesImg">
              <img src={image4} />
            </div>
            <div className="servicesTitle">
              <h3>personalized guidance</h3>
            </div>
            <div className="servicesText">
              <p>
                We match you with the right provider and service to meet your
                needs. your schedule. and your price point.
              </p>
            </div>
          </div>
          <div className="services">
            <div className="servicesImg">
              <img src={image5} />
            </div>
            <div className="servicesTitle">
              <h3>quality & results focused</h3>
            </div>
            <div className="servicesText">
              <p>
                We hire outstanding therapists & coaches who are compassionate,
                honest and focused on measurable change.
              </p>
            </div>
          </div>
          <div className="services">
            <div className="servicesImg">
              <img src={image6} />
            </div>
            <div className="servicesTitle">
              <h3>supportive community</h3>
            </div>
            <div className="servicesText">
              <p>
                We believe that everyone needs a connected place where they can
                improve their emotional well-being and create lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerBody;
