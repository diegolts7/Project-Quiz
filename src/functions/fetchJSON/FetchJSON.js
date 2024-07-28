async function fetchJSON() {
  try {
    let data = await fetch(
      "https://gerenciador-projetos-server.vercel.app/quizQuests"
    );
    let dados = await data.json();
    return dados;
  } catch (error) {
    console.log(error);
  }
}

export default fetchJSON;
