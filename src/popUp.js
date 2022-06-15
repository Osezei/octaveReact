import React from "react";
import "./index.css";

const PopUp = () => {
  return (
    <>
      <div className="modal hidden">
        <button className="btn--close-modal">&times;</button>

        <h2 className="modal-header">Register in just 5 minutes</h2>
        <form className="modal-form">
          <label> First Name</label> <input type="text" />
          <label> Last Name </label>
          <input type="text" />
          <label> Email Adress</label> <input type="text" />
          <button className="btn next-step">Next step &rarr;</button>
        </form>
      </div>
      <div className="overlay hidden"></div>
    </>
  );
};

export default PopUp;
