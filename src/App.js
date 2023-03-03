import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Lists from "./components/Dashboard/Lists/Lists";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
