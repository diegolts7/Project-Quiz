import fetchJSON from "../../../functions/fetchJSON/FetchJSON";
import { useEffect, useState, useContext, useRef } from "react";
import {
  DivToglleQuestionOrQuit,
  BtnOpcoes,
  DivOpcoes,
  Pergunta,
  DivQuestion,
  DivInfoResultQuestions,
} from "./Styles";
import EmbaralharArray from "../../../functions/embaralharArray/EmbaralharArray";
import { ContextResult } from "../../../context/ResultContext/ResultContext";
import Audio from "../../../assets/sons/audio.mp3";
import Audio2 from "../../../assets/sons/silvio-santos-certa-resposta.mp3";
import ModalResultado from "../modalResultado/ModalResultado";
import SelecionaQuestoes from "../../../functions/selecionaQuestoes/SelecionaQuestoes";

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
  const { toggleAcertosTotais, toggleQuestoesRespondidas } =
    useContext(ContextResult);
  const audioRefAcertou = useRef(null);
  const audioRefErrou = useRef(null);
  const [questoesFeitas, setQuestoesFeitas] = useState(0);

  async function pegarDados() {
    let dados = await fetchJSON();
    let questoesRespondidadas = localStorage.getItem("questoesRespondidas");
    if (questoesRespondidadas !== null) {
      setQuestions(SelecionaQuestoes(dados, JSON.parse(questoesRespondidadas)));
    } else {
      setQuestions(dados.slice(0, 10));
    }
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
      setQuestoesFeitas((beforeQuestoesFeitas) => beforeQuestoesFeitas + 1);
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
        <ModalResultado
          acertos={acertos}
          questoesRespondidadas={questoesFeitas}
        />
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
