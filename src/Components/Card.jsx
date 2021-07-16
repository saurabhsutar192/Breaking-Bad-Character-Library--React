import React from "react";
import "../CSS/card.css";

function Card({ char, setCharacter, setToggle }) {
  function handleClick() {
    setCharacter(char);
    setToggle(true);
  }

  return (
    <div onClick={handleClick} className="charContainer">
      <div className="charName">{char.name}</div>
      <div className="charImg">
        <img src={char.img} alt="x" />
      </div>
    </div>
  );
}

export default Card;
