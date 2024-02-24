import React, { useState, useEffect } from "react";
import item from "../items";
import "./Game.css";
import ShopItem from "../ShopItem";
import Levels from "../Levels/Levels";
import Modal from "../modal/Modal";
import LandingModal from "../modal/LandingModal";

let clickAmount = 1;
const Game = () => {
  const targetXpAmount = 4; //How much the xp goes up by
  const ClickPower = 0.2; //Sets how much the click goes from level to level
  const [Name, setName] = useState();
  const [openModal, setOpenMoadal] = useState(false);
  const [openLandingModal, setOpenLandingModal] = useState(false);
  const [test, setTest] = useState(item);
  let [played, setPlayed] = useState(false);
  const [targetXp, setTargetXp] = useState(10);
  let [count, setCount] = useState(0);
  let [xp, setXp] = useState(0);
  let [Userclick, setUserClick] = useState(0);
  let [autoClick, setAutoClick] = useState(0);
  const [level, setLevel] = useState(1);
  const LevelUp = (xp) => {
    if (xp >= targetXp - 1) {
      setLevel(level + 1);
      setTargetXp(targetXp * targetXpAmount);
      setCount((count += 10));
      setXp((xp = 0));
      localStorage.setItem("Userlvl", level + 1);
    }
  };
  const AddCounter = () => {
    setXp(xp + 1); // adds xp to total xp count
    setUserClick((Userclick = clickAmount)); //sets the user click
    setCount(count + Userclick); // adds to the master counter
    LevelUp(xp);
    localStorage.setItem("Count", count + 1);
    localStorage.setItem("UserXp", xp + 1);
    localStorage.setItem("TargetXp", targetXp + 1);
  };
  const initGame = () => {
    if (localStorage.getItem("Played") == "true" || played == true) {
      setLevel(parseInt(localStorage.getItem("Userlvl")));
      setXp(parseInt(localStorage.getItem("UserXp")));
      setCount(parseInt(localStorage.getItem("Count")));
      setTargetXp(parseFloat(localStorage.getItem("TargetXp")));
      setName(localStorage.getItem("Name"));
      const itemz = localStorage.getItem("items");
      setTest(JSON.parse(itemz));
      //localStorage.clear();
    } else if (localStorage.getItem("Played") == "false" || played == false) {
      localStorage.setItem("Userlvl", level);
      localStorage.setItem("Count", count);
      localStorage.setItem("UserXp", xp);
      localStorage.setItem("TargetXp", targetXp);
      localStorage.setItem("Played", "true");
      localStorage.setItem("items", JSON.stringify(test));
      localStorage.setItem("Name", " ");
      setOpenLandingModal(true);
      setPlayed((played = true));
    }
  };

  useEffect(() => {
    initGame();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      test.forEach((i) => {
        if (i.Active == true) {
          setAutoClick((autoClick = i.clickRate * i.Amount)); // sets the auto click
          setCount((count += autoClick));
          localStorage.setItem("Count", count + 1);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="game">
        <div className="gridContainerL">
          <Levels
            level={level}
            setLevel={setLevel}
            xp={xp}
            targetXp={targetXp}
          ></Levels>
        </div>
        {openLandingModal && (
          <LandingModal
            Name={Name}
            setName={setName}
            closeModal={setOpenLandingModal}
          ></LandingModal>
        )}
        {openModal && <Modal closeModal={setOpenMoadal} />}
        <div className="gridContainer">
          <div>
            <h1 className="counter">{Name}</h1>
            <h1 className="counter" id="counter">
              {count.toFixed(0)} Boards sold
            </h1>
            <h3 className="counter">{autoClick.toFixed(2)} Per second</h3>
          </div>
          <button onClick={AddCounter} className="mainBtn"></button>
        </div>
        <div className="gridContainer">
          <h1 className="shopTitle">Shop</h1>
          <ShopItem
            test={test}
            setTest={setTest}
            count={count}
            setCount={setCount}
          ></ShopItem>
        </div>
      </div>
      <button className="SettingsButton">clear</button>
    </>
  );
};

export default Game;
