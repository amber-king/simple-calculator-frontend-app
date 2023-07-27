import "./App.css";
import Calculator from "./Components/calculatorReact"; // calculator js w/ functioning code imported

// hook calculator function onto App.js to display & work
function App() {
  return (
    <div className="App">
      <h1>🧮 Calculator App 🧮</h1>
      <Calculator />
    </div>
  );
}

export default App;
