import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Kailey",
    last: "Kotynski",
  };

  const personList = [
    {
      first: "Kailey",
      last: "Kotynski",
    },
    {
      first: "Omkar",
      last: "Rane",
    },
  ];
  return (
    <div className="App">
      <Greet name="Kailey" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
