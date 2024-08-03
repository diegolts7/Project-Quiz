import fetchJSON from "../../../functions/fetchJSON/FetchJSON";
import { useEffect, useState, useContext, useRef } from "react";
import {
  DivToglleQuestionOrQuit,
  BtnOpcoes,
  DivOpcoes,
  Pergunta,
  DivQuestion,
  DivInfoResultQuestions,
  DivResultFinal,
  DivResultFinalBtn,
  DivAcertosErros,
} from "./Styles";
import EmbaralharArray from "../../../functions/embaralharArray/EmbaralharArray";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ContextResult } from "../../../context/ResultContext/ResultContext";
import Audio from "../../../assets/sons/audio.mp3";
import Audio2 from "../../../assets/sons/silvio-santos-certa-resposta.mp3";

const ModalQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(
    localStorage.getItem("currentQuestion") !== null
      ? Number(localStorage.getItem("currentQuestion"))
      : 0
  );
  const [opcaoClicada, setOpcaoClicada] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [isExitQuestions, setIsExitQuestions] = useState(false);
  const [opcoesEmbaralhadas, setOpcoesEmbaralhadas] = useState([]);
  const navigate = useNavigate();
  const { toggleAcertosTotais, toggleQuestoesRespondidas } =
    useContext(ContextResult);
  const audioRefAcertou = useRef(null);
  const audioRefErrou = useRef(null);

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
        toggleAcertosTotais();
        audioRefAcertou.current.play();
      } else {
        audioRefErrou.current.play();
      }

      if (currentQuestion + 1 === questions.length) {
        localStorage.setItem("currentQuestion", `${0}`);

        localStorage.setItem("lastUpdate", new Date().toISOString());
      } else {
        localStorage.setItem("currentQuestion", `${currentQuestion + 1}`);
      }

      toggleQuestoesRespondidas(questions[currentQuestion]);
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
      <audio ref={audioRefErrou} src={Audio} preload="auto" />
      <audio ref={audioRefAcertou} src={Audio2} preload="auto" />
      {isExitQuestions ? (
        <DivResultFinal>
          <h2>Resultado final</h2>
          <DivAcertosErros>
            <p>Acertos</p>
            <strong>{acertos}</strong>
          </DivAcertosErros>
          <DivAcertosErros>
            <p>Questões feitas</p>
            <strong>{currentQuestion + 1}</strong>
          </DivAcertosErros>
          <DivResultFinalBtn>
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
                  }%20questões.%20Vejam%20quanto%20vocês%20conseguem%20&url=https://project-quiz-three.vercel.app/`,
                  "_blank"
                )
              }
            >
              Compartilhar
              <FaXTwitter />
            </button>
            <button onClick={() => navigate("/", { replace: true })}>
              Menu inicial
            </button>
          </DivResultFinalBtn>
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
