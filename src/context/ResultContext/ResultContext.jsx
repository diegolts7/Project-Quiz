import { useState, createContext, useEffect } from "react";

const ContextResult = createContext();

const ResultContext = ({ children }) => {
  const [acertosTotais, setAcertosTotais] = useState(
    localStorage.getItem("questoesCertas") !== null
      ? Number(localStorage.getItem("questoesCertas"))
      : 0
  );
  const [questoesRespondidas, setQuestoesRespondidas] = useState(0);

  function toggleAcertosTotais() {
    setAcertosTotais((acertosTotaisBefore) => acertosTotaisBefore + 1);
  }
  function toggleQuestoesRespondidas() {
    setQuestoesRespondidas(
      (questoesRespondidasBefore) => questoesRespondidasBefore + 1
    );
  }

  useEffect(() => {
    if (localStorage.getItem("questoesCertas") !== null) {
      let nQuestoesCertas = Number(localStorage.getItem("questoesCertas"));
      localStorage.setItem("questoesCertas", `${nQuestoesCertas + 1}`);
    } else if (acertosTotais > 0) {
      localStorage.setItem("questoesCertas", `${acertosTotais}`);
    }
  }, [acertosTotais]);

  /*useEffect(() => {
    if (localStorage.getItem("questoesRespondidas") !== null) {
      let nQuestoesCertas = JSON.parse(localStorage.getItem("questoesRespondidas"));
      localStorage.setItem("questoesCertas", `${nQuestoesCertas + 1}`);
      console.log(nQuestoesCertas);
    } else if (acertosTotais > 0) {
      localStorage.setItem("questoesCertas", `${acertosTotais}`);
    }
  }, [questoesRespondidas]);*/

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
