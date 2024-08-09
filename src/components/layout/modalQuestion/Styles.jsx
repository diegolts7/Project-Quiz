import styled from "styled-components";

const DivQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 70vh;
  border: 1px solid purple;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`;

const Pergunta = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: purple;
`;

const DivOpcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BtnOpcoes = styled.button`
  padding: 15px;
  cursor: ${(props) => (props.opcaoClicada ? "not-allowed" : "pointer")};
  border: 1px solid gray;
  border-radius: 4px;
  font-weight: 550;
  font-size: 17px;
  color: ${(props) =>
    props.opcaoClicada ? (props.opcaoCerta ? "white" : "red") : "gray"};
  background-color: ${(props) =>
    props.opcaoClicada ? (props.opcaoCerta ? "green" : "inherit") : "inherit"};

  text-align: left;
  &:hover {
    border: 1px solid #2c343c;
    color: #2c343c;
  }
`;

const DivToglleQuestionOrQuit = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;

  button {
    cursor: pointer;
    padding: 12px;
    border-radius: 4px;
    border: none;
    background-color: purple;
    color: white;
    font-size: 17px;
    font-weight: 600;
    &:hover {
      background-color: #c504c5;
      transition: 0.3s;
    }
  }
`;

const DivInfoResultQuestions = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 17px;
    color: #2c343c;
    font-weight: 600;
  }
`;

export {
  DivToglleQuestionOrQuit,
  BtnOpcoes,
  DivOpcoes,
  Pergunta,
  DivQuestion,
  DivInfoResultQuestions,
};
