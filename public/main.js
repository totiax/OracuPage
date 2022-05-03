let ir = document.getElementById("ir");
let pantallaInicio = document.getElementById("pantallaInicial");
let pantallaPensando = document.getElementById("pantallaPensando");
let pantallaCartas = document.getElementById("pantallaCartas");
let header = document.getElementById("header");
let pic1 = document.getElementById("cart00");
let pic2 = document.getElementById("cart01");
let pic3 = document.getElementById("cart02");
let pic4 = document.getElementById("cart03");
let pic5 = document.getElementById("cart04");
let pic6 = document.getElementById("cart05");
let title1 = document.getElementById("tit00");
let title2 = document.getElementById("tit01");
let title3 = document.getElementById("tit02");
let title4 = document.getElementById("tit03");
let title5 = document.getElementById("tit04");
let title6 = document.getElementById("tit05");
let txt1 = document.getElementById("text00");
let txt2 = document.getElementById("text01");
let txt3 = document.getElementById("text02");
let txt4 = document.getElementById("text03");
let txt5 = document.getElementById("text04");
let txt6 = document.getElementById("text05");
let btninicio = document.getElementById("volver");
let partidasAnteriores = [];
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");
let jugador3 = document.getElementById("jugador3");
let jugador4 = document.getElementById("jugador4");
let jugador5 = document.getElementById("jugador5");
let jugador6 = document.getElementById("jugador6");
let jugadores = [];
let formulario = document.getElementById("form");
let btnMatch = document.getElementById("btnMatch");
let pantallaMatch = document.getElementById("Match");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let tit1 = document.getElementById("tit1");
let tit2 = document.getElementById("tit2");
let btnVolver = document.getElementById("cerrar");
let crearButton = document.getElementById("crearButton");
i = 0;
let btnMenu = document.getElementById("Menu");

partida = 1;
let dameRandom = (max, min) => {
  let random = Math.round(Math.random() * (max - min) + min);
  return random;
};
let tirar = 0;
let resultado = [];
let jugar = () => {
  let elegido = cartas[dameRandom(0, 20)];
  if (resultado.indexOf(elegido) == -1) {
    resultado.push(elegido);
    tirar++;
  } else {
    console.log("los que se repiten son ", elegido.nombre);
  }

  //   console.log(cartas[dameRandom(0, 20)].nombre);
  if (tirar < 6) {
    jugar();
  } else {
    console.log(resultado);
    iterar(resultado);
    partidasAnteriores.push(resultado);
  }
};

let iterar = (juegoCompleto) => {
  jugador1.innerHTML = "Carta de " + Nombre1.value;
  jugador2.innerHTML = "Carta de " + Nombre1.value;
  jugador3.innerHTML = "Carta de " + Nombre1.value;
  jugador4.innerHTML = "Carta de " + Nombre2.value;
  jugador5.innerHTML = "Carta de " + Nombre2.value;
  jugador6.innerHTML = "Carta de " + Nombre2.value;
  pic1.setAttribute("src", juegoCompleto[0].img);
  pic2.setAttribute("src", juegoCompleto[1].img);
  pic3.setAttribute("src", juegoCompleto[2].img);
  pic4.setAttribute("src", juegoCompleto[3].img);
  pic5.setAttribute("src", juegoCompleto[4].img);
  pic6.setAttribute("src", juegoCompleto[5].img);
  title1.innerHTML = juegoCompleto[0].nombre;
  title2.innerHTML = juegoCompleto[1].nombre;
  title3.innerHTML = juegoCompleto[2].nombre;
  title4.innerHTML = juegoCompleto[3].nombre;
  title5.innerHTML = juegoCompleto[4].nombre;
  title6.innerHTML = juegoCompleto[5].nombre;
  txt1.innerHTML = juegoCompleto[0].descripcion;
  txt2.innerHTML = juegoCompleto[1].descripcion;
  txt3.innerHTML = juegoCompleto[2].descripcion;
  txt4.innerHTML = juegoCompleto[3].descripcion;
  txt5.innerHTML = juegoCompleto[4].descripcion;
  txt6.innerHTML = juegoCompleto[5].descripcion;
  img1.setAttribute("src", juegoCompleto[0].img);
  img2.setAttribute("src", juegoCompleto[1].img);
  img3.setAttribute("src", juegoCompleto[2].img);
  img4.setAttribute("src", juegoCompleto[3].img);
  img5.setAttribute("src", juegoCompleto[4].img);
  img6.setAttribute("src", juegoCompleto[5].img);
  tit1.innerHTML = "Cartas de " + Nombre1.value;
  tit2.innerHTML = "Cartas de " + Nombre2.value;
};

let resetAndPlay = (estado) => {
  tirar = 0;
  resultado = [];
  if (estado) {
    jugar();
  }
};
function mostrarResultados() {
  pantallaInicio.style.display = "none";
  header.style.display = "none";
  pantallaPensando.style.display = "flex";
  setTimeout(() => {
    pantallaPensando.style.display = "none";
    pantallaCartas.style.display = "flex";
    document.getElementById("btnMatch").style.display = "flex";

    document.getElementById("volver").style.display = "block";
  }, 3000);
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  mostrarResultados();
  resetAndPlay(true);
});

// let nextPagina = document.getElementById("ir").addEventListener(`click`, () => {
//   let cerrar = (pantallaInicio.style.display = "none");
//   let cerrarhead = (header.style.display = "none");
//   let open = (pantallaPensando.style.display = "flex");

//   setTimeout(() => {
//     pantallaPensando.style.display = "none";
//     pantallaCartas.style.display = "flex";

//     document.getElementById("volver").style.display = "block";
//   }, 3000);
//   resetAndPlay(true);
// });
btninicio.addEventListener("click", () => {
  resetAndPlay();
  header.style.display = "flex";
  pantallaCartas.style.display = "none";
  pantallaInicio.style.display = "flex";
  btnAdd();
});
function btnAdd() {
  let newelemento = `<button type="submit"  onclick="saludar${i}()">Partida ${partida}</buttont><br> `;
  const node = newelemento;
  document.getElementById("Ab");
  crearButton.innerHTML += newelemento;
  i++;
  partida++;
  if (partida > 3) {
    let nvoInput = ` <h1>ya jugo las 3 partidas</h1>`;
    crearButton.innerHTML += nvoInput;
    ir.style.display = "none";
  }
}
let jugarViejito = (partida) => {
  iterar[partidasAnteriores[partida]];
  mostrarResultados();
};
function saludar0() {
  jugarViejito(1);
  btnMenu.style.display = "block";
}
function saludar1() {
  jugarViejito(2);
  btnMenu.style.display = "block";
}
function saludar2() {
  jugarViejito(3);

  btnMenu.style.display = "block";
}
btnMenu.addEventListener("click", () => {
  pantallaCartas.style.display = "none";
  pantallaInicio.style.display = "flex";
});

function match() {
  if (
    resultado[0].id +
      resultado[1].id +
      resultado[2].id +
      resultado[3].id +
      resultado[4].id +
      resultado[5].id <
    10
  ) {
    document.getElementById("eleccion").innerHTML = "hay match";
  } else {
    document.getElementById("eleccion").innerHTML = "no hay match";
  }
}

btnMatch.addEventListener("click", () => {
  pantallaCartas.style.display = "none";
  pantallaMatch.style.display = "flex";
  match();
});
btnVolver.addEventListener("click", () => {
  pantallaCartas.style.display = "flex";
  pantallaMatch.style.display = "none";
});
