import React from "react";

import "./style.css";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Icons = ({ playerTeam, setPlayerTeam, turn, playersName }) => {
    const [XLabel, setXLabel] = React.useState("");
    const [OLabel, setOLabel] = React.useState("");

    React.useEffect(() => {
        if (playerTeam === "X") {
            setXLabel(playersName[0]);
            setOLabel(playersName[1]);
        }else {
            setOLabel(playersName[0]);
            setXLabel(playersName[1]);
        }
    }, [playersName]);

    if (playerTeam === undefined) {
        return (
            <>
                <div className="icon-label icon-label-hover blue" onClick={() => {
                    setPlayerTeam("X");
                    setXLabel(playersName[0]);
                    setOLabel(playersName[1]);
                }}>
                    <FaTimes className="icon" />
                    <h4 className="label">Times</h4>
                </div>
                <div className="icon-label icon-label-hover red" onClick={() => {
                    setPlayerTeam("O");
                    setOLabel(playersName[0]);
                    setXLabel(playersName[1]);
                }}>
                    <FaRegCircle className="icon" />
                    <h4 className="label">Circle</h4>
                </div>
            </>
        );
    }else if (turn === "X") {
        return (
            <>
                <div className="icon-label icon-label-turn blue">
                    <FaTimes className="icon" />
                    <h4 className="label">{XLabel}</h4>
                </div>
                <div className="icon-label red">
                    <FaRegCircle className="icon" />
                    <h4 className="label">{OLabel}</h4>
                </div>
            </>
        );
    }else if(turn === "O") {
        return (
            <>
                <div className="icon-label blue">
                    <FaTimes className="icon" />
                    <h4 className="label">{XLabel}</h4>
                </div>
                <div className="icon-label icon-label-turn red">
                    <FaRegCircle className="icon" />
                    <h4 className="label">{OLabel}</h4>
                </div>
            </>
        );
    }else {
        return (
            <>
                <div className="icon-label blue">
                    <FaTimes className="icon" />
                    <h4 className="label">{XLabel}</h4>
                </div>
                <div className="icon-label red">
                    <FaRegCircle className="icon" />
                    <h4 className="label">{OLabel}</h4>
                </div>
            </>
        );
    }
};

const Teams = ({ playerTeam, setPlayerTeam, turn, playersName }) => {
    return (
        <div className="teams_container">
            <Icons playerTeam={playerTeam} setPlayerTeam={setPlayerTeam} turn={turn} playersName={playersName} />
        </div>
    );
};

export default Teams;