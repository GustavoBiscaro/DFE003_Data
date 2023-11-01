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
  return "<h2>Total de Álbuns</h2> " + "<img src='./assets/div_img/number.jpg' width='200'>"+ "<p>" + totalAlbuns + " álbuns lançados </p> ";
}
totalDeAlbuns.innerHTML = totalAlbuns();



// Nome de cada álbum
function tituloPorAlbum() {
  let resultado = "<h2>Nome dos álbuns</h2>" + "<img src='./assets/div_img/discografia.jpeg' width='200'>";
  for (let albuns of beatlesObject) {
    resultado += "<p>" + albuns.name + "</p>";
  }
  return resultado;
}

nomeDeAlbuns.innerHTML = tituloPorAlbum();

// Quantidade de música por álbum
function musicaPorAlbum() {
  let resultado = "<h2>Quantidade de música por álbum</h2>" + "<img src='./assets/div_img/sucessos.jpg' width='200'>";
  for (let albuns of beatlesObject) {
    resultado += "<h3>" + albuns.name + "</h3>" + "<p>" + albuns.tracks.length + "</p>";
  }
  return resultado;
}

totalTracklist.innerHTML = musicaPorAlbum();

// Todas faixas de música
function tracklist() {
  let resultado = "";

  for (let album of beatlesObject) {
  
    resultado += "<h3>" + album.name + "</h3>" + "<br>";

    for (let track of album.tracks) {
      resultado += "<p>" + track + "</p>";
    }


  }

  return resultado;
}

listTracklist.innerHTML = "<h2>Tracklist</h2>" + "<img src='./assets/div_img/tracklist.jpg' width='200'>" + tracklist();

// vozes
var txtInput = document.querySelector('#txtInput');
var voiceList = document.querySelector('#voiceList'); //lista de voz
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = []

newVoices()
if(speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = newVoices
}

btnSpeak.addEventListener('click', ()=> {
  txtInput.value = tituloPorAlbum() + " e possuem um " + totalAlbuns();
  var toSpeak = new SpeechSynthesisUtterance(txtInput.value)
  var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
  voices.forEach((voice) => {
    if(voice.name === selectedVoiceName) {
      toSpeak.voice = voice
    }
  })

  synth.speak(toSpeak)
})


function newVoices(){
  voices = synth.getVoices()
  // caso não haja valor retorna zero, se verdadeiro vasculha a lista
  var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex
  voiceList.innerHTML = ''
  voices.forEach((voice) =>{
    var listItem = document.createElement('option')
    listItem.textContent = voice.name
    listItem.setAttribute('data-lang', voice.lang)
    listItem.setAttribute('data-name', voice.name)
    voiceList.appendChild(listItem)
  })

  voiceList.selectedIndex = selectedIndex

}







