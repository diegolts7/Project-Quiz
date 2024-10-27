import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../components/pages/inicio/Inicio";
import Quests from "../components/pages/quests/Quests";
import Result from "../components/pages/result/Result";

function App() {
  return (
    <>
      <div className="conteinerPrincipal">
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
