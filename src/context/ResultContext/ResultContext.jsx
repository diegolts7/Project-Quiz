import { useState, createContext, useEffect } from "react";

const ContextResult = createContext();

const ResultContext = ({ children }) => {
  const [acertosTotais, setAcertosTotais] = useState(
    localStorage.getItem("questoesCertas") !== null
      ? Number(localStorage.getItem("questoesCertas"))
      : 0
  );
  const [questoesRespondidas, setQuestoesRespondidas] = useState(
    localStorage.getItem("questoesRespondidas") !== null
      ? JSON.parse(localStorage.getItem("questoesRespondidas"))
      : []
  );
  const [isQuestionsBlocked, setIsQuestionsBlocked] = useState(false);

  /*function toggleIsQuestionsBlocked() {
    setIsQuestionsBlocked((isQuestionsBlockedBefore) =>
      isQuestionsBlockedBefore === true ? false : true
    );
  }*/

  function toggleAcertosTotais() {
    setAcertosTotais((acertosTotaisBefore) => acertosTotaisBefore + 1);
  }
  function toggleQuestoesRespondidas(questaoRespondida) {
    setQuestoesRespondidas((questoesRespondidasBefore) => [
      ...questoesRespondidasBefore,
      questaoRespondida,
    ]);
  }

  useEffect(() => {
    if (acertosTotais > 0) {
      localStorage.setItem("questoesCertas", `${acertosTotais}`);
    }
  }, [acertosTotais]);

  useEffect(() => {
    if (questoesRespondidas.length > 0) {
      localStorage.setItem(
        "questoesRespondidas",
        JSON.stringify(questoesRespondidas)
      );
    }
  }, [questoesRespondidas]);

  return (
    <ContextResult.Provider
      value={{
        acertosTotais,
        toggleAcertosTotais,
        questoesRespondidas,
        toggleQuestoesRespondidas,
        isQuestionsBlocked,
        setIsQuestionsBlocked,
      }}
    >
      {children}
    </ContextResult.Provider>
  );
};

export { ResultContext, ContextResult };
