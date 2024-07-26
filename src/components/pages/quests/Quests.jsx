import fetchJSON from "../../../functions/fetchJSON/FetchJSON";
import { useEffect, useState } from "react";

const Quests = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  async function pegarDados() {
    let dados = await fetchJSON();
    setQuestions(dados);
  }

  useEffect(() => {
    pegarDados();
  }, []);
  return (
    <div>
      {questions.length > 0 && questions[currentQuestion].question}
      <button
        onClick={() =>
          setCurrentQuestion((beforeQuestion) => beforeQuestion + 1)
        }
      >
        clique para mudar
      </button>
    </div>
  );
};

export default Quests;
