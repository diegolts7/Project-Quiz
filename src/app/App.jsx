import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../components/pages/inicio/Inicio";
import Quests from "../components/pages/quests/Quests";
import Result from "../components/pages/result/Result";
import { ResultContext } from "../context/ResultContext/ResultContext";

function App() {
  return (
    <ResultContext>
      <>
        <div className="conteinerPrincipal">
          <Router>
            <Routes>
              <Route exact path="/" element={<Inicio />} />
              <Route path="/quests" element={<Quests />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </Router>
        </div>
      </>
    </ResultContext>
  );
}

export default App;
