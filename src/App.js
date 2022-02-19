import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Router>
        <Suspense fallback="loading">
          <Routes />
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
