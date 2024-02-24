import React from "react";
import "./modal.css";
const LandingModal = ({ closeModal, setName, Name }) => {
  const addName = (name) => {
    if (name == null) {
      setName("I love my mom");
      localStorage.setItem("Name", name);
    } else {
      setName(name);
      localStorage.setItem("Name", name);
    }
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Welcome!</h1>
        </div>
        <div className="body">
          <p>
            Hello and welcome to board Store Clicker! This is a small project I
            have made for school and in hopes of trying to find a job. The game
            using cookies and localStorage to save your data on your computer.
            With that if you clear your cache or delete your browser your game
            data will be lost. When you press start selling you are agreeing to
            let the game use the localStorage. anyway thank you and I hope you
            enjoy playing!
          </p>
          <h2>Enter Your Store Name:</h2>
          <input
            value={Name}
            onChange={(e) => addName(e.target.value)}
            type="text"
          ></input>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Start Selling!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingModal;
