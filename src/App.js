import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <Weather />
      <p className="Weather">
        This project was coded by{""}
        <a
          href="https://github.com/Ayokunnumi247"
          target="_blank"
          rel="profile"
        >
          Ayokunnumi Andu
        </a>{" "}
        and is
        <a
          href="https://github.com/Ayokunnumi247/weather-react"
          target="_blank"
          rel="github"
        >
          {" "}
          open-source
        </a>
        {""} on GitHub
      </p>
    </div>
  );
}

export default App;
