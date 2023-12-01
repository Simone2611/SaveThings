const imgPre = document.getElementById("imgpreview");
const descPre = document.getElementById("desc");
const quantPre = document.getElementById("quant");

let inDescPre = document.getElementById("inDescPre");
let desc = document.getElementById("desc");

let inQuantPre = document.getElementById("inQuantPre");
let quant = document.getElementById("quant");

let inOra = document.getElementById("inOra");
let ora = document.getElementById("ora");

let tipo = "+";

const btnNeg = document.getElementById("negativo");

function negativo() {
  tipo = "-";
  quant.innerText = tipo + quant.textContent.slice(1);
}

function positivo() {
  tipo = "+";
  quant.innerText = tipo + quant.textContent.slice(1);
}

inQuantPre.addEventListener("input", (element) => {
  lettera = element.data;
  if (element.data == null) {
    let stringa = quant.textContent.slice(0, -1);
    quant.textContent = stringa;
  } else {
    if (quant.textContent.includes("-") || quant.textContent.includes("+")) {
      quant.textContent = quant.textContent + lettera;
    } else {
      quant.textContent = tipo + quant.textContent + lettera;
    }
  }

  if (quant.textContent.length == 1) {
    quant.textContent = "";
  }
});

inDescPre.addEventListener("input", (element) => {
  lettera = element.data;

  if (element.data == null) {
    let stringa = desc.textContent.slice(0, -1);
    desc.textContent = stringa;
  } else {
    desc.textContent = desc.textContent + lettera;
  }
});

inOra.addEventListener("input", (element) => {
  lettera = element.data;
  if (element.data == null && ora.textContent.length == 4) {
    let stringa = ora.textContent.slice(0, -2);
    ora.textContent = stringa;
  } else {
    if (element.data == null) {
      let stringa = ora.textContent.slice(0, -1);
      ora.textContent = stringa;
    } else {
      if (ora.textContent.length < 2) {
        ora.textContent = ora.textContent + lettera;
      } else {
        if (ora.textContent.includes(":")) {
          ora.textContent = ora.textContent + lettera;
        } else {
          ora.textContent = ora.textContent + ":" + lettera;
        }
      }
    }
  }
});
function crea() {
  let getdesc = document.getElementById("desc").innerText;
  let getora = document.getElementById("ora").innerText;
  let getquant = document.getElementById("quant").innerText;

  let old = localStorage.getItem("elementi");
  let arr = [];

  if (old) {
    arr = JSON.parse(old);
  }

  let ogg = {
    desc: getdesc,
    ora: getora,
    quant: getquant,
  };

  arr.push(ogg);

  localStorage.setItem("elementi", JSON.stringify(arr));
  inDescPre.value = "";
  desc.innerText = "";
  inQuantPre.value = "";
  quant.innerText = "";
  inOra.value = "";
  ora.innerText = "";
}
