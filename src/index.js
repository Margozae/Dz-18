'use strict';
const container = document.querySelector('.container');

const data = fetch('https://swapi.co/api/films/');
data.then(item => item.json())
    .then(result => { for (let j=0; j < result.results.length; j++ ) {
        const divFilm = document.createElement('div');
        container.append(divFilm);
        divFilm.append(result.results[j].title);
        
        function getShip() {
            const dataNew = fetch('https://swapi.co/api/films/');
            dataNew.then(item => item.json())
                .then(result => { for (let i=0; i < result.results[j].starships.length; i++ ) { 
                    let divShip = document.createElement('div');
                    divFilm.append(divShip);
                    fetch(`${result.results[j].starships[i]}`)
                    .then(item => item.json())
                    .then(result => divShip.append(result.name))
                }
                })
            divFilm.removeEventListener('click', getShip);
        }
        divFilm.addEventListener('click', getShip);
    }
    });






