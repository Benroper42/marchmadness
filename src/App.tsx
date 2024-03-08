import React from "react";
import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

interface TeamInfo {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h1 style={{ textAlign: "center" }}>NCAA College Basketball Teams</h1>;
}

class Team extends React.Component<TeamInfo> {
  render() {
    const oneTeam = this.props;

    return (
      <div
        style={{
          width: "calc(25% - 20px)",
          margin: "10px",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <>
        <Welcome />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {teamData.teams.map((team) => (
            <Team key={team.tid} {...team} />
          ))}
        </div>
      </>
    </div>
  );
}

export default App;
