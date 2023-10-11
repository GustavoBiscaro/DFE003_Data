try {
    const beatles = require('../src/data/beatles_songs/beatles_songs.json');

    const beatleStringyToObject = JSON.parse(JSON.stringify(beatles, null, 2));


  } catch (error) {
    console.error('Erro na importação do arquivo JSON:', error);
  }

