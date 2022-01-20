
"use strict";

const txtSearchInput = document.querySelector('#txtSearchInput');
const btnSearch = document.querySelector('#btnSearch'); // no validation
const URL_BASE = 'https://www.swapi.tech/api/people/?name=';
const tareaResult = document.querySelector('#tareaResult');
const tareaLabelFor = tareaResult.nextElementSibling;



const getApi = ()=> {
    /*Skriv din kod här*/
    const searchText = txtSearchInput.value;
    // const searchText='chewbacca'; //test

    const url = `${URL_BASE}${searchText}`;

    fetch(url)
        .then(result => result.json())
        .then(data => {
            /*Och här*/
            if (data.result.length > 0) {
                tareaResult.disabled = false;
                tareaLabelFor.innerHTML = 'Karaktärer';
            }
            else {
                tareaResult.disabled = true;
                tareaLabelFor.innerHTML = 'Resultat';
            }

            for (const character of data.result) {
                const resultString =
                    `Name: ${character.properties.name}, Height: ${character.properties.height},Mass: ${character.properties.mass}, Gender: ${character.properties.gender}, Hair color: ${character.properties.hair_color}\n`;

                tareaResult.innerHTML += resultString;
            }
        })
        .catch(err => console.log(err))
}

btnSearch.addEventListener('click', getApi); //no validation