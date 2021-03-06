import { useState, useEffect } from "react";

const Log = (props) => {
  const [logText, setLogText] = useState(props.children);
  const loadLogs = () => {
    // retrive logs data from the API service
    fetch(`${props.config.apiUrl}/log`)
      .then((response) => response.json())
      .then((data) => setLogText(data));
  };

  useEffect(loadLogs);

  const doLogMe = () => {
    // send request to API to log current user
    fetch(`${props.config.apiUrl}/log`, { method: "POST" })
      .then(props.callback)
      .then(loadLogs);
  };

  return (
    <>
      <button onClick={doLogMe}>Log Me!</button>
      <div className="log">
        {("" || logText).split("\n").map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </>
  );
};

export default Log;
