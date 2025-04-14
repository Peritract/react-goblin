import { useState } from "react";
import "./index.css";

interface GoblinProps {
  goblinName: string;
  initialHealth?: number;
}

function Goblin({ goblinName, initialHealth = 10 }: GoblinProps) {
  const [health, setHealth] = useState(initialHealth);

  const modifyHealth = () => {
    if (health > 0) setHealth(health - 1);
  };

  const isDead = health <= 0;

  return (
    <div className="goblinContainer">
      {!isDead ? (
        <>
          <h3 className="name">{goblinName}</h3>
          <p className="description">A horrible goblin.</p>
          <p className="health">Health: {health}/10</p>
          <button className="attack-button" onClick={modifyHealth}>
            Attack {goblinName} ⚔️
          </button>
        </>
      ) : (
        <h3 className="success">You have successfully slain {goblinName}!</h3>
      )}
    </div>
  );
}

export default Goblin;
