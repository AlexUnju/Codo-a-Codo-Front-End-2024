const seccionBatalla = document.getElementById("campo-batalla");
const msjBatalla = document.getElementById("msj-batalla");
const imgAtaqueJugador = document.getElementById("img-ataque-jugador");
const imgAtaquePc = document.getElementById("img-ataque-pc");
const btnPiedra = document.getElementById("btn-piedra");
const btnPapel = document.getElementById("btn-papel");
const btnTijeras = document.getElementById("btn-tijeras");

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

const imagenes = [
  {
    name: "Piedra",
    url: "/static/img/Piedra.PNG",
  },
  {
    name: "Papel",
    url: "/static/img/Papel.PNG",
  },
  {
    name: "Tijeras",
    url: "/static/img/Tijeras.PNG",
  },
];

function iniciar() {
  seccionBatalla.style.display = "none";
}

btnPiedra.addEventListener("click", function () {
  opcionJugador = "Piedra";
  opPc();
});

btnPapel.addEventListener("click", function () {
  opcionJugador = "Papel";
  opPc();
});

btnTijeras.addEventListener("click", function () {
  opcionJugador = "Tijeras";
  opPc();
});

function opPc() {
  var aleaorio = nAleatorio();

  if (aleaorio == 0) {
    opcionPc = "Piedra";
  } else if (aleaorio == 1) {
    opcionPc = "Papel";
  } else if (aleaorio == 2) {
    opcionPc = "Tijeras";
  }

  batalla();
}

function batalla() {
  if (opcionJugador == opcionPc) {
    msjBatalla.innerHTML = "Empataste! 😮";
  } else if (opcionJugador == "Piedra" && opcionPc == "Tijeras") {
    msjBatalla.innerHTML = "🎉Felicitaciones🎉 Ganaste!";
  } else if (opcionJugador == "Papel" && opcionPc == "Piedra") {
    msjBatalla.innerHTML = "🎉Felicitaciones🎉 Ganaste!";
  } else if (opcionJugador == "Tijeras" && opcionPc == "Papel") {
    msjBatalla.innerHTML = "🎉Felicitaciones🎉 Ganaste!";
  } else {
    msjBatalla.innerHTML = "Te gano la PC 😔";
  }

  addImagenes();
}

function nAleatorio() {
  let n = Math.floor(Math.random() * 3);
  return n;
}

function addImagenes() {
  for (let i = 0; i < imagenes.length; i++) {
    if (opcionJugador == imagenes[i].name) {
      imgJugador = imagenes[i].url;
      var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
      imgAtaqueJugador.innerHTML = inserta;
    }

    if (opcionPc == imagenes[i].name) {
      imgPc = imagenes[i].url;
      var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
      imgAtaquePc.innerHTML = inserta;
    }
  }

  seccionBatalla.style.display = "flex";
}

window.addEventListener("load", iniciar);
