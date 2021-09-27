import { useEffect, useState } from "react";
import { caller, endpoints } from "./endpoints.js";
import Card from "./Components/Card";
import "./CSS/app.css";

function App() {
  let [characters, setCharacters] = useState([]);
  let [toggle, setToggle] = useState(false);
  let [character, setCharacter] = useState([]);

  useEffect(() => {
    caller(endpoints.characters).then((res) => {
      setCharacters(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="title">Breaking Bad Character Library</h1>
      <div className="cardContainer">
        {characters.map((char) => {
          return (
            <Card
              key={char.char_id}
              char={char}
              setCharacter={setCharacter}
              setToggle={setToggle}
            />
          );
        })}
      </div>
      {toggle && (
        <div className="charInfoContainer">
          <div className="leftSec">
            <img src={character.img} alt="x" />
          </div>
          <div className="rightSec">
            <div>
              Name: <span> {character.name}</span>
            </div>
            <div>
              Birthday: <span>{character.birthday}</span>
            </div>
            <div>
              Nickname: <span>{character.nickname}</span>
            </div>
            <div>
              Occupation: <span>{character.occupation.join(", ")}</span>
            </div>
            <div>
              Status: <span>{character.status}</span>
            </div>
            <div>
              Portrayed: <span>{character.portrayed}</span>
            </div>
          </div>
          <i
            onClick={() => {
              setToggle(false);
            }}
            className="material-icons close"
          >
            close
          </i>
        </div>
      )}
    </div>
  );
}

export default App;
