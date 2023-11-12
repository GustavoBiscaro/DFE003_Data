import arquivo from './data/beatles_songs/beatles_songs.json' assert {
    type: "json"
}
const coletania = arquivo;

import futebol from './data/football/brazilian_times.json' assert {
    type: "json"
}
const arquivo2 = futebol.clubs;

// console.log(arquivo)
const divRoot = document.getElementById("root");
// const value = `${arquivo[1]["cover"]}`
// divRoot.innerHTML = value;


let allHtml;

function show(data){
    allHtml = data.map(({cover,name,tracks}) => {
        return (allHtml=`<div class="contentAlbuns">
            
            <div class="albuns">
                    <span class="tituloCd">Nome do Disco: ${name}</span>                
                    <img src="${cover}" class="capa"></img>
                    <div class="musicas">
                        1 - ${tracks[1]}<br>
                        2 - ${tracks[2]}<br>
                        3 - ${tracks[3]}<br>
                        4 - ${tracks[4]}<br>
                        5 - ${tracks[5]}<br>
                        6 - ${tracks[6]}<br>
                        7 - ${tracks[7]}<br>
                        8 - ${tracks[8]}<br>
                        9 - ${tracks[9]}<br>
                        10 - ${tracks[10]}<br>
                        11 - ${tracks[11]}<br>
                        12 - ${tracks[12]}<br>
                        13 - ${tracks[13]}<br>
                        14 - ${tracks[14]}<br>
                        15 - ${tracks[15]}<br>
                        16 - ${tracks[16]}<br>
                    </div>    
                
            </div>         
            
            
        </div>`)
    })
    divRoot.innerHTML = allHtml.join(""); 
}
show(coletania)



// var numbers = [1, 4, 9];
// var doubles = numbers.map(function (num) {
//   return num * 2;
// });
// // doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
{/* <img class="imagens" src="${cover}" alt="${cover}"> */}

