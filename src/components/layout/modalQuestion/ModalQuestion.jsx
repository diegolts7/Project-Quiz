import fetchJSON from "../../../functions/fetchJSON/FetchJSON";
import { useEffect, useState } from "react";
import {
  DivToglleQuestionOrQuit,
  BtnOpcoes,
  DivOpcoes,
  Pergunta,
  DivQuestion,
  DivInfoResultQuestions,
  DivResultFinal,
} from "./Styles";
import EmbaralharArray from "../../../functions/embaralharArray/EmbaralharArray";
import { FaXTwitter } from "react-icons/fa6";

const ModalQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [opcaoClicada, setOpcaoClicada] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [isExitQuestions, setIsExitQuestions] = useState(false);
  const [opcoesEmbaralhadas, setOpcoesEmbaralhadas] = useState([]);

  async function pegarDados() {
    let dados = await fetchJSON();
    setQuestions(dados.slice(0, 10));
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

  function ProximaPergunta() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((beforeQuestion) => beforeQuestion + 1);
    } else {
      setIsExitQuestions(true);
    }

    setOpcaoClicada(false);
  }

  useEffect(() => {
    pegarDados();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setOpcoesEmbaralhadas(
        EmbaralharArray(questions[currentQuestion].options)
      );
    }
  }, [questions, currentQuestion]);

  return (
    <DivQuestion>
      {isExitQuestions ? (
        <DivResultFinal>
          <h2>Resultado final</h2>
          <div>
            <p>Acertos</p>
            <strong>{acertos}</strong>
          </div>
          <div>
            <p>Questões feitas</p>
            <strong>{currentQuestion + 1}</strong>
          </div>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=Meu%20resultado%20no%20quiz%20:%20${
                  acertos > 0 ? acertos : ""
                }%20${
                  acertos === 0
                    ? "nenhum%20acerto"
                    : acertos === 1
                    ? "acerto"
                    : "acertos"
                }%20de%20${
                  currentQuestion + 1
                }%20questões.%20Vejam%20quanto%20vocês%20conseguem%20&url=https://www.seusite.com/artigo`,
                "_blank"
              )
            }
          >
            Compartilhar
            <FaXTwitter />
          </button>
        </DivResultFinal>
      ) : (
        <>
          {questions.length > 0 && (
            <>
              <DivInfoResultQuestions>
                <p>{`${currentQuestion + 1} / ${questions.length}`}</p>
                <p>{acertos > 0 && `Acertos : ${acertos}`}</p>
              </DivInfoResultQuestions>

              <Pergunta>{questions[currentQuestion].question}</Pergunta>
              <DivOpcoes>
                {opcoesEmbaralhadas.length > 0 &&
                  opcoesEmbaralhadas.map((option, index) => (
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
              <button onClick={ProximaPergunta}>Próxima pergunta</button>
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
