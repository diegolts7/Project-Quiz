async function fetchJSON() {
  try {
    let data = await fetch("/json/Questions.json");
    let dados = await data.json();
    return dados;
  } catch (error) {
    console.log(error);
  }
}

export default fetchJSON;
