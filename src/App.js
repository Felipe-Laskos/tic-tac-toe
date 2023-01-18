import React from 'react';

import './App.css';

import Title from './components/Title';
import Teams from "./components/Teams";
import Game from './components/Game';
import { FaUndoAlt, FaRegCircle, FaTimes } from 'react-icons/fa';

function VerifyWinner(array) {
  const possibilitysWin = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"]
  ];
  let win = false;

  possibilitysWin.forEach((positions) => {
    let have = 0;

    positions.forEach((position) => {
      if (array.includes(position)) {
        have++;
      }
    });

    if (have === 3) {
      win = true;
    }
  });
  if (win) {
    return true;
  }else {
    return false;
  }
}


function App() {
  const [playable, setPlayable] = React.useState(false);
  const [playersName, setPlayersName] = React.useState(["Player1", "Player2"]);
  const [title, setTitle] = React.useState(`Select ${playersName[0]} Team!`);
  const [playerTeam, setPlayerTeam]  = React.useState(undefined);
  const [turn, setTurn] = React.useState(undefined);
  const [situation, setSituation] = React.useState([[], []]);

  function restartGame() {
    setPlayable(false);
    setTurn(undefined);
    setTitle(`Select ${playersName[0]} Team!`);
    setPlayerTeam(undefined);
    setSituation([[], []]);
  }

  function handleInputPlayer1Change(playerName) {
    setPlayersName([playerName, playersName[1]]);
    if (playerTeam === undefined) {
      setTitle(`Select ${playerName} Team!`);
    }
  }

  function handleInputPlayer2Change(playerName) {
    setPlayersName([playersName[0], playerName])
  }

  React.useEffect(() => {
    let arrayX = situation[0];
    let arrayO = situation[1];

    const resultX = VerifyWinner(arrayX);
    const resultO = VerifyWinner(arrayO);

    if (resultX || resultO) {
      setPlayable(false);
      if (turn === playerTeam) {
        setTitle(`The ${playersName[0]} Won!`);
      }else {
        setTitle(`The ${playersName[1]} Won!`);
      }
    }else if (playerTeam === turn && arrayX.length === 5 || playerTeam !== turn && arrayX.length === 5 || playerTeam === turn && arrayO.length === 5 || playerTeam !== turn && arrayO.length === 5) {
      setPlayable(false);
      setTitle("Tied game!");
      setTurn("");
    }else {
      if (turn === "X") {
        setTurn("O");
      }else if (turn === "O") {
        setTurn("X");
      }
    }
  }, [situation]);

  React.useEffect(() => {
    if (playerTeam !== undefined) {
      setTurn(playerTeam);
      setPlayable(true);
    }
  }, [playerTeam]);

  React.useEffect(() => {
    if (playable && turn === playerTeam) {
      setTitle(`It's ${playersName[0]} turn!`);
    }else if (playable) {
      setTitle(`It's ${playersName[1]} turn!`);
    }
  }, [turn, playersName]);

  return (
    <div className='app_container'>
      <div className='title-teams_container'>
        <Title title={title} />
        <Teams playerTeam={playerTeam} setPlayerTeam={setPlayerTeam} turn={turn} playersName={playersName} />
      </div>
      <Game turn={turn} setTurn={setTurn} playable={playable} situation={situation} setSituation={setSituation} />
      <div className="restart-icon_container" onClick={restartGame}>
        <FaUndoAlt className="restart-icon" title="Restart Game" />
      </div>
      <div className="player-names_container">
        <div className='label-input'>
          {!playerTeam && (
            <label htmlFor="player1">P1</label>
          )}
          {playerTeam === "X" && (
            <FaTimes className='icon-player blue' />
          )}
          {playerTeam === "O" && (
            <FaRegCircle className='icon-player red' />
          )}
          <input className="player-name" value={playersName[0]} id="player1" maxLength={10} onChange={(event) => {
            handleInputPlayer1Change(event.target.value);
          }} />
        </div>
        <div className='label-input'>
          {!playerTeam && (
            <label htmlFor="player2">P2</label>
          )}
          {playerTeam === "X" && (
            <FaRegCircle className='icon-player red' />
            )}
          {playerTeam === "O" && (
            <FaTimes className='icon-player blue' />
          )}
          <input className="player-name" value={playersName[1]} id="player2" maxLength={10} onChange={(event) => {
            handleInputPlayer2Change(event.target.value);
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
