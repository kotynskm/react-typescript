import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Kailey",
    last: "Kotynski",
  };
  return (
    <div className="App">
      <Greet name="Kailey" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
