try {
  const beatles = require('../src/data/beatles_songs/beatles_songs.json');

  const beatlesObject = JSON.parse(JSON.stringify(beatles, null, 2));

// Exibe a quantidade total de álbuns
  function totalAlbuns() {
    const totalAlbuns = beatlesObject.length;
    console.log("Total de Álbuns: " + totalAlbuns);
  }
  

// Nome de cada álbum
  function tituloPorAlbum() {
    for (let albuns of beatlesObject) {
      console.log(albuns.id + ' ' + albuns.name);
    }
  }

// Quantidade de música por álbum
  function musicaPorAlbum() {
    for (let albuns of beatlesObject) {
      console.log(albuns.id + "ª " + "Álbum: " + albuns.name + "\nQuantidade de música: " + albuns.tracks.length + "\n\n");
    }
  }

// Todas faixas de música
  function tracklist() {
    for (let album of beatlesObject) {
      console.log(album.id + "ª " + album.name);
      console.log("Tracklist:");

      for (let track of album.tracks) {
        console.log(track);
      }

      console.log(); // Pula uma linha após cada álbum
    }


  }




} catch (error) {
  console.error('Erro na importação do arquivo JSON:', error);
}

