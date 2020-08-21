import AnimaNumeros from "./anima-numeros.js";

export default function initAnimaisFetch() {
  function createAnimal(animal) {
    const divCriacao = document.createElement("div");
    divCriacao.classList.add("numero-animal");
    divCriacao.innerHTML = `<h3> ${animal.specie} </h3><span data-numero='${animal.total}'>0</span>`;
    return divCriacao;
  }

  async function fetchAnimal(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numeros = document.querySelector(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numeros.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimal("./animaisapi.json");
}
