import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="conteinerPrincipal">
        <Router>
          <Routes>
            <Route path="" element />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
