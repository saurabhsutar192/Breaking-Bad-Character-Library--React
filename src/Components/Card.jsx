import React from "react";
import "../CSS/card.css";

function Card(prop) {
  function handleClick() {
    prop.setToggle(true);
    prop.setName(prop.char.name);
    prop.setBirthday(prop.char.birthday);
    prop.setNickname(prop.char.nickname);
    prop.setOccupation(prop.char.occupation);
    prop.setPortrayed(prop.char.portrayed);
    prop.setStatus(prop.char.status);
    prop.setImg(prop.char.img);
  }

  return (
    <div onClick={handleClick} className="charContainer">
      <div className="charName">{prop.char.name}</div>
      <div className="charImg">
        <img src={prop.char?.img} alt="x" />
      </div>
    </div>
  );
}

export default Card;
