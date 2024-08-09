import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ContextResult } from "../../../context/ResultContext/ResultContext";
import { useContext } from "react";

const DivResultFinal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 40px;
    font-weight: 600;
    color: #2c343c;
  }
`;

const DivAcertosErros = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  p {
    font-size: 20px;
    color: gray;
  }
  strong {
    font-size: 55px;
    color: purple;
  }
`;

const DivResultFinalBtn = styled.div`
  display: flex;
  gap: 1rem;
  button {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 16px;
    background-color: black;
    border-radius: 15px;
    color: white;
    font-weight: 800;
    border: none;
    cursor: pointer;
    svg {
      font-size: 20px;
    }
    &:hover {
      background-color: #2c343c;
      transition: 0.3s;
    }
  }
`;

const ModalResultado = ({ acertos, questoesRespondidadas }) => {
  const navigate = useNavigate();

  return (
    <DivResultFinal>
      <h2>Resultado total</h2>
      <DivAcertosErros>
        <p>Acertos</p>
        <strong>{acertos}</strong>
      </DivAcertosErros>
      <DivAcertosErros>
        <p>Questões feitas</p>
        <strong>{questoesRespondidadas}</strong>
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
  );
};

export default ModalResultado;
