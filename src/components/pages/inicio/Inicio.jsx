import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

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

const Inicio = () => {
  const navigate = useNavigate();
  return (
    <DivInicio>
      <h1>Quiz da programação</h1>
      <DivOpcoes>
        <input
          value={"Iniciar"}
          type="button"
          onClick={() => navigate("/quests")}
        />
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
