import React from "react";
import "./modal.css";
const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Settings</h1>
        </div>
        <div className="body">
          <h2>Clear your Data</h2>
          <button>Clear</button>
          <h2>Sound</h2>
          <button>On/off</button>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={() => closeModal(false)}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
