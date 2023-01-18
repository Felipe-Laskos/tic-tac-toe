import React from "react";

import "./style.css";

import { FaTimes, FaRegCircle } from "react-icons/fa";

const Square = ({ turn, situation, setSituation, position }) => {
    const [icon, setIcon] = React.useState(undefined);
    
    React.useEffect(() => {
        if (turn === undefined) {
            setIcon(undefined);
        }
    }, [turn]);

    if (icon === undefined) {
        return (
            <div className="square" onClick={() => {
                if (turn === "X") {
                    setIcon("X"); 
                    setSituation([[...situation[0], position], situation[1]]);            
                }else {
                    setIcon("O");
                    setSituation([situation[0], [...situation[1], position]]);
                }
            }} />
        );
    }else if (icon === "X") {
        return (
            <div className="square">
                <FaTimes className="game-icon blue" />
            </div>
        );
    }else {
        return (
            <div className="square">
                <FaRegCircle className="game-icon red" />
            </div>
        );
    }
};

const Game = ({ turn, playable, situation, setSituation }) => {

    if (playable) {
        return(
            <div className="game_container">
                <span className="game_line line-1" />
                <span className="game_line line-2" />
                <span className="game_line line-3" />
                <span className="game_line line-4" />
                <div className="squares">
                    <Square turn={turn} position="00" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="01" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="02" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="10" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="11" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="12" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="20" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="21" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="22" situation={situation} setSituation={setSituation} />
                </div>
            </div>
        );
    }else {
        return(
            <div className="game_container not-playable">
                <span className="game_line line-1" />
                <span className="game_line line-2" />
                <span className="game_line line-3" />
                <span className="game_line line-4" />
                <div className="squares">
                    <Square turn={turn} position="00" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="01" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="02" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="10" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="11" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="12" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="20" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="21" situation={situation} setSituation={setSituation} />
                    <Square turn={turn} position="22" situation={situation} setSituation={setSituation} />
                </div>
            </div>
        );
    }
};

export default Game;