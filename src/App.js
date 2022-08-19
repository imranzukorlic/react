import "./App.css";
import React from "react";
import Team from "./componets/TeamCard/TeamCard";
const favoriteTeams = [
  { id: 0, name: "arsenal", points: 6 },
  { id: 1, name: "Man. City", points: 6 },
  { id: 2, name: "Liverpul", points: 2 },
  { id: 3, name: "Pazar", points: 9 },
  { id: 4, name: "Partizan", points: 5 },
];
const App = () => {
  const [teams, setTeams] = React.useState(favoriteTeams);
  const deleteTeam = (id) => {
    const newTeams = teams.filter((team) => team.id != id);
    setTeams(newTeams);
  };

  return (
    <div className="card-container">
      <button
        onClick={() =>
          setTeams((prev) => [...prev, { name: "Chelsi", id: 5, points: 12 }])
        }
      >
        Dodaj novi tim
      </button>
      {teams.map((team) => (
        <div key={team.id}>
          <Team
            name={team.name}
            points={team.points}
            onDeleteTeam={() => deleteTeam(team.id)}
          />
        </div>
      ))}
    </div>
  );
};
export default App;
