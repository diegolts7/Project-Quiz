import { ContextResult } from "../../../context/ResultContext/ResultContext";
import { useContext } from "react";

const Result = () => {
  const { acertosTotais, questoesRespondidas } = useContext(ContextResult);
  return (
    <div>
      Questoes respondidas : {questoesRespondidas.length} acertos totais :{" "}
      {acertosTotais} erros totais :{" "}
      {questoesRespondidas.length - acertosTotais}
    </div>
  );
};

export default Result;
