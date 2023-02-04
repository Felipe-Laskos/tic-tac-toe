import { FaRegCircle, FaTimes } from 'react-icons/fa';
import "./style.css";

const PlayersName = ({ playerTeam, playersName, setPlayersName, setTitle }) => {
    function handleInputPlayer1Change(playerName) {
        setPlayersName([playerName, playersName[1]]);
        if (playerTeam === undefined) {
          setTitle(`Select ${playerName} Team!`);
        }
      }
    
      function handleInputPlayer2Change(playerName) {
        setPlayersName([playersName[0], playerName])
      }

    return (
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
    );
};

export default PlayersName;