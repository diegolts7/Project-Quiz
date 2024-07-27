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
  div {
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
  }
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

export {
  DivToglleQuestionOrQuit,
  BtnOpcoes,
  DivOpcoes,
  Pergunta,
  DivQuestion,
  DivInfoResultQuestions,
  DivResultFinal,
};
