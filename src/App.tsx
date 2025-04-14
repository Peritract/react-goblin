import Goblin from "./Goblin";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Goblins!</h1>
      <ul className="goblinList">
        <Goblin goblinName="Mose" />
        <Goblin goblinName="Wilt" />
        <Goblin goblinName="Trevor" />
      </ul>
    </div>
  );
}

export default App;
