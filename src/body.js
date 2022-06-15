import "./index.css";
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";

// const Image = () => {
//   <img src="./img/image1.jpg" />;
// };

const Content = () => {
  return (
    <>
      <div className="middle">
        <div className="photo animate__animated animate__slideInLeft">
          <img src={image1} alt="image" />
        </div>

        <div className="main-text animate__animated animate__fadeIn">
          <h3>Come as you are.</h3>
          <h5>
            Supporting your emotional well-being through specialized therapy,
            goals-based coaching and skills-based workshops, all offered
            virtually at this time.
          </h5>

          <a href="#">Book a Free Consultation</a>
        </div>
      </div>

      <div className="middle-2">
        <div className="text-2">
          <h3>We are in this together.</h3>
          <br />
          <br />
          <h5>
            Octave is a musical term referring to a complete collection of
            musical notes. Similarly, our offering is a complete set of services
            to support a range of needs, preferences, and price points.
            <br />
            <br />
            <br />
            We have assembled a talented team of clinicians, coaches,
            instructors, designers and technologists to help guide you on your
            journey wherever you are, and provide a world-class experience along
            the way.
            <br />
            <br />
            <br />
            In the light of COVID-19, we offer virtual therapy for new and
            existing clients. Check out our <a href="#">Virtual FAOs page </a>
            for more information on the cost of virtual care.
            <br />
          </h5>
        </div>

        <div className="image-2">
          <img src={image2} alt="image-2" />
        </div>
      </div>
    </>
  );
};

export default Content;
