import { useState } from "react";

export default function Navbar() {
  const [mode, setMode] = useState("dark");
  function handleMode() {
    if ((mode = "dark")) {
      setMode("light");
    } else if ((mode = "light")) {
      setMode("dark");
    }
  }
  return (
    <div className="site-header">
      <div className="container">
        <h1> MA Mamba'ul Ulum Margoyoso</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#home"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#contact"> Contact </a>
            </li>
            <li>
              <button onClick={handleMode}>{mode}</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
