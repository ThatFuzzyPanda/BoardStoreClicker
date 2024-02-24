import React from "react";
import "./Levels.css";
const Levels = (props) => {
  var level = props.level;
  var xpBar = 0;

  return (
    <div className="Level-Wrapper">
      <div>
        <h2>Level: {level}</h2>
      </div>
      <div id="myProgress" className="myProgress">
        <progress
          className="xpBar"
          max={props.targetXp}
          value={props.xp}
        ></progress>
        <h2>
          {" "}
          {props.xp} / {props.targetXp}
        </h2>
      </div>
    </div>
  );
};

export default Levels;
