import logo from "./logo.svg";
import "./App.css";
import Browser from "./Components/Browser";

function App() {
  return (
    <div className="App" borderColor="4px solid red">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Browser />
      </div>
    </div>
  );
}

export default App;
