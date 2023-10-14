// Importe o arquivo JSON com a afirmação de importação
import beatles from './data/beatles_songs/beatles_songs.json' assert {type: "json"};

const totalDeAlbuns = document.getElementById("totalOfalbuns");
const nomeDeAlbuns = document.getElementById("nameOfalbuns");
const totalTracklist = document.getElementById("totalOftracklist");
const listTracklist = document.getElementById("listaOftracklist");

const beatlesObject = JSON.parse(JSON.stringify(beatles, null, 2));


// Exibe a quantidade total de álbuns
function totalAlbuns() {
  const totalAlbuns = beatlesObject.length;
  return "<h1>Total de Álbuns</h1> " + "<p>" + totalAlbuns + "</p>";
}
totalDeAlbuns.innerHTML = totalAlbuns();



// Nome de cada álbum
function tituloPorAlbum() {
  let resultado = "<h1>Nome dos álbuns</h1>";
  for (let albuns of beatlesObject) {
    resultado += "<p>" + albuns.name + "</p>";
  }
  return resultado;
}

nomeDeAlbuns.innerHTML = "<img src='./assets/div_img/discografia.jpeg' width='450'>" + tituloPorAlbum();

// Quantidade de música por álbum
function musicaPorAlbum() {
  let resultado = "<h1>Quantidade de música por álbum</h1>";
  for (let albuns of beatlesObject) {
    resultado += "<h2>" + albuns.name + "</h2>" + "<p>" + albuns.tracks.length + "</p>";
  }
  return resultado;
}

totalTracklist.innerHTML = "<img src='./assets/div_img/sucessos.jpg' width='450'>" + musicaPorAlbum();

// Todas faixas de música
function tracklist() {
  let resultado = "";

  for (let album of beatlesObject) {
  
    resultado += "<h2>" + album.name + "</h2>" + "<br>";

    for (let track of album.tracks) {
      resultado += "<p>" + track + "</p>";
    }


  }

  return resultado;
}

listTracklist.innerHTML ="<img src='./assets/div_img/tracklist.jpg' width='450'>" + "<h1>Tracklist</h1>" + tracklist();









