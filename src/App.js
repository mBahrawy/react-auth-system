import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/routes";
import "./App.css";
import Nav from "./components/UI/Navbar/Nav";

function App() {
  return (
    <>
    <Nav/>
    <main className="App">
      <Router>
        <Suspense fallback="loading">
          <Routes />
        </Suspense>
      </Router>
    </main>
    </>
  );
}

export default App;
