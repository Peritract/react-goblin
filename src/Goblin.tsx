import { useState } from "react";

function Goblin({ goblinName } : {goblinName: string }) {
    const [health, setHealth] = useState(10);

    const modifyHealth = () => {
        setHealth(health - 1);
    }

    return (
        <div>
        <h3>{goblinName}</h3>
        <p>A horrible goblin.</p>
        <p>{health}/10</p>
        <button onClick={modifyHealth}>Attack</button>
        </div>
    );
}

export default Goblin;
