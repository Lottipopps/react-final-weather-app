import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather standardCity="London"/>
        <footer>
          This project was coded by Carlotta Missiroli and is open sourced on{" "}
          <a
            href="https://github.com/Lottipopps/react-final-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
