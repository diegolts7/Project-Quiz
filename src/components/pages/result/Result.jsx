import { ContextResult } from "../../../context/ResultContext/ResultContext";
import { useContext } from "react";
import ModalResultado from "../../layout/modalResultado/ModalResultado";

const Result = () => {
  const { acertosTotais, questoesRespondidas } = useContext(ContextResult);

  return (
    <ModalResultado
      acertos={acertosTotais}
      questoesRespondidadas={questoesRespondidas.length}
    />
  );
};

export default Result;
