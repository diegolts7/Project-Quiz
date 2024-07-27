import styled from "styled-components";

const DivQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 75vh;
  border: 2px solid purple;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
`;

const Pergunta = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: purple;
`;

const DivOpcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BtnOpcoes = styled.button`
  padding: 12px;
  cursor: ${(props) => (props.opcaoClicada ? "not-allowed" : "pointer")};
  border: 1px solid gray;
  border-radius: 4px;
  font-weight: 550;
  font-size: 15px;
  color: ${(props) =>
    props.opcaoClicada ? (props.opcaoCerta ? "white" : "red") : "gray"};
  background-color: ${(props) =>
    props.opcaoClicada ? (props.opcaoCerta ? "green" : "inherit") : "inherit"};

  text-align: left;
  &:hover {
    border: 1px solid black;
    color: black;
  }
`;

const DivToglleQuestionOrQuit = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;

  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: purple;
    color: white;
    font-size: 15px;
    font-weight: 600;
    &:hover {
      border: 1px solid purple;
      background-color: inherit;
      color: purple;
    }
  }
`;

export { DivToglleQuestionOrQuit, BtnOpcoes, DivOpcoes, Pergunta, DivQuestion };
