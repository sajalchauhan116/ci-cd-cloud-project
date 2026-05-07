import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3001")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CI/CD Cloud Project 🚀</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;