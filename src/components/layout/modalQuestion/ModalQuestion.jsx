import fetchJSON from "../../../functions/fetchJSON/FetchJSON";
import { useEffect, useState } from "react";
import {
  DivToglleQuestionOrQuit,
  BtnOpcoes,
  DivOpcoes,
  Pergunta,
  DivQuestion,
} from "./Styles";

const ModalQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [opcaoClicada, setOpcaoClicada] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [isExitQuestions, setIsExitQuestions] = useState(false);

  async function pegarDados() {
    let dados = await fetchJSON();
    setQuestions(dados);
  }

  const handleOptionClick = (index) => {
    if (!opcaoClicada) {
      setOpcaoClicada(true);
      if (
        questions[currentQuestion].options[index] ===
        questions[currentQuestion].answer
      ) {
        setAcertos((acertosBefore) => acertosBefore + 1);
      }
    }
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <DivQuestion>
      {isExitQuestions ? (
        <p>
          {acertos}/{currentQuestion + 1}
        </p>
      ) : (
        <>
          {questions.length > 0 && (
            <>
              <p>{`${currentQuestion + 1} / ${questions.length}`}</p>
              <p>{`Acerou : ${acertos}`}</p>
              <Pergunta>{questions[currentQuestion].question}</Pergunta>
              <DivOpcoes>
                {questions[currentQuestion].options.map((option, index) => (
                  <BtnOpcoes
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    opcaoClicada={opcaoClicada}
                    opcaoCerta={
                      option === questions[currentQuestion].answer &&
                      opcaoClicada
                    }
                  >
                    {option}
                  </BtnOpcoes>
                ))}
              </DivOpcoes>
            </>
          )}

          {opcaoClicada && (
            <DivToglleQuestionOrQuit>
              <button
                onClick={() => {
                  setCurrentQuestion((beforeQuestion) => beforeQuestion + 1);
                  setOpcaoClicada(false);
                }}
              >
                Próxima pergunta
              </button>
              <button onClick={() => setIsExitQuestions(true)}>
                Sair do quiz
              </button>
            </DivToglleQuestionOrQuit>
          )}
        </>
      )}
    </DivQuestion>
  );
};

export default ModalQuestion;
