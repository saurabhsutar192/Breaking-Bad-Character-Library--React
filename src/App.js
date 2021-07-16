import { useEffect, useState } from "react";
import { caller, endpoints } from "./endpoints.js";
import Card from "./Components/Card";
import "./CSS/app.css";

function App() {
  let [characters, setCharacters] = useState([]);
  let [toggle, setToggle] = useState(false);
  let [name, setName] = useState();
  let [birthday, setBirthday] = useState();
  let [nickname, setNickname] = useState();
  let [occupation, setOccupation] = useState([]);
  let [portrayed, setPortrayed] = useState();
  let [status, setStatus] = useState();
  let [img, setImg] = useState();

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
              setName={setName}
              setBirthday={setBirthday}
              setNickname={setNickname}
              setOccupation={setOccupation}
              setPortrayed={setPortrayed}
              setStatus={setStatus}
              setToggle={setToggle}
              setImg={setImg}
            />
          );
        })}
      </div>
      {toggle && (
        <div className="charInfoContainer">
          <div className="leftSec">
            <img src={img} />
          </div>
          <div className="rightSec">
            <div>
              Name: <span> {name}</span>
            </div>
            <div>
              Birthday: <span>{birthday}</span>
            </div>
            <div>
              Nickname: <span>{nickname}</span>
            </div>
            <div>
              Occupation: <span>{occupation.join(",")}</span>
            </div>
            <div>
              Status: <span>{status}</span>
            </div>
            <div>
              Portrayed: <span>{portrayed}</span>
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
