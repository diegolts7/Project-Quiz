import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContextResult } from "../../../context/ResultContext/ResultContext";
import { useContext, useEffect, useState } from "react";
import { MdOutlineTimer } from "react-icons/md";

const DivInicio = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffafa;
  color: #2c343c;
  h1 {
    font-size: 45px;
    padding-bottom: 5vh;
  }
`;

const DivOpcoes = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-direction: column;
  input {
    padding: 15px;
    width: 30vh;
    margin: 0 auto;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: 550;
    font-size: 18px;
    color: #fffafa;
    background-color: purple;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);

    &:hover {
      background-color: #c504c5;
      transition: 0.3s;
    }
  }
`;

const InfoAtualizarQuestions = styled.div`
  color: red;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 0.3rem;
  flex-direction: column;
  svg {
    font-size: 25px;
  }
`;

const Inicio = () => {
  const navigate = useNavigate();
  const { isQuestionsBlocked, setIsQuestionsBlocked } =
    useContext(ContextResult);
  const [horasParaAtualizar, setHorasParaAtualizar] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("lastUpdate") !== null) {
      let diferencaLastUpdateHoras =
        (new Date(new Date().toISOString()) -
          new Date(localStorage.getItem("lastUpdate"))) /
        (1000 * 60 * 60);
      if (diferencaLastUpdateHoras >= 24) {
        setIsQuestionsBlocked(false);
      } else {
        setIsQuestionsBlocked(true);
      }
      setHorasParaAtualizar(24 - Math.floor(diferencaLastUpdateHoras));
    }
  }, []);
  return (
    <DivInicio>
      <h1>Quiz da programação</h1>
      <DivOpcoes>
        {!isQuestionsBlocked ? (
          <input
            value={"Iniciar"}
            type="button"
            onClick={() => navigate("/quests")}
          />
        ) : (
          <InfoAtualizarQuestions>
            <p>Novas questões em {horasParaAtualizar} horas</p>
            <MdOutlineTimer />
          </InfoAtualizarQuestions>
        )}
        <input
          value={"Resultados"}
          type="button"
          onClick={() => navigate("/result")}
        />
      </DivOpcoes>
    </DivInicio>
  );
};

export default Inicio;
