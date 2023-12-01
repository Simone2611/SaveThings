const contenitore = document.getElementById("contenitore");

const lista = localStorage.getItem("elementi");

let stringa = JSON.parse(lista);

stringa.forEach((element) => {
  let div = document.createElement("div");
  div.classList.add("tabelladash");

  let desch3 = document.createElement("h3");
  desch3.innerText = element.desc;

  let oreh3 = document.createElement("h3");
  oreh3.innerText = element.ora;
  oreh3.classList.add("ore");

  let quanth3 = document.createElement("h3");
  quanth3.innerText = element.quant;
  if (quanth3.innerText.includes("+")) {
    quanth3.classList.add("positivo");
  } else {
    quanth3.classList.add("negativo");
  }

  div.appendChild(desch3);
  div.appendChild(oreh3);
  div.appendChild(quanth3);
  contenitore.appendChild(div);
});
