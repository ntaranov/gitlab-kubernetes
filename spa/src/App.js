import { useEffect } from "react";
import cover from "./cover400.jpg";
import "./App.css";
import config from "./config";
import Log from "./components/Log.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cover} className="App-logo" alt="logo" />
        <h2>Deploying to Kubernetes with GitLab</h2>
        <p>
          <a
            className="App-link"
            href="https://devops.redpill.solutions/articles/introduction-to-continuous-delivery-with-gitlab"
            target="_blank"
          >
            Introduction to Continuous Delivery with GitLab
          </a>
        </p>
        <p>
          <a
            className="App-link"
            href="https://devops.redpill.solutions/"
            target="_blank"
          >
            More on CI/CD
          </a>
        </p>
      </header>
      <Log config={config}>Logs are not found</Log>
    </div>
  );
}

export default App;
