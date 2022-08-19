import React from "react";
import "./TeamCard.css";
const Team = ({ name, points, onDeleteTeam }) => {
  return (
    <div className="team-card">
      <p>{name}</p>
      <p>{points}</p>
      <button onClick={onDeleteTeam}>X</button>
    </div>
  );
};
export default Team;
