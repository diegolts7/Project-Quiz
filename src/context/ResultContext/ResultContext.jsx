import { useState, createContext } from "react";

const ContextResult = createContext();

const ResultContext = ({ children }) => {
  const [acertosTotais, setAcertosTotais] = useState(0);
  const [questoesRespondidas, setQuestoesRespondidas] = useState(0);

  function toggleAcertosTotais() {
    setAcertosTotais((acertosTotaisBefore) => acertosTotaisBefore + 1);
  }
  function toggleQuestoesRespondidas() {
    setQuestoesRespondidas(
      (questoesRespondidasBefore) => questoesRespondidasBefore + 1
    );
  }

  return (
    <ContextResult.Provider
      value={{
        acertosTotais,
        toggleAcertosTotais,
        questoesRespondidas,
        toggleQuestoesRespondidas,
      }}
    >
      {children}
    </ContextResult.Provider>
  );
};

export { ResultContext, ContextResult };
