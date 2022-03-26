let currentPokemon;
let pokemonCount = 16;


async function loadPokemons() {
    for (let i = 1; i < pokemonCount; i++) {
        let poke = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        renderPokemonInfo(poke);

    }
}


function renderPokemonInfo(poke) {
    let pokemons = document.getElementById('pokemons');
    let element = currentPokemon['types']['0']['type']['name'];

    if (currentPokemon['types']['1']) {

        pokemons.innerHTML += renderPokemonInfo1(poke);

        if (element == 'grass') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#99C262'
        } else if (element == 'fire') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#FF3030'
        } else if (element == 'water') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#1C86EE'
        } else if (element == 'poison') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#8a2be2'
        } else if (element == 'bug') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#54FF9F'
        } else if (element == 'normal') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#D2691E'
        } else if (element == 'electric') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#B3EE3A'
        } else if (element == 'fairy') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#C1CDCD'
        } else if (element == 'ground') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#8B7E66'
        }

    } else {
        pokemons.innerHTML += renderPokemonInfo2(poke);

        if (element == 'grass') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#99C262'
        } else if (element == 'fire') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#FF3030'
        } else if (element == 'water') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#1C86EE'
        } else if (element == 'poison') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#8a2be2'
        } else if (element == 'bug') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#54FF9F'
        } else if (element == 'normal') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#D2691E'
        } else if (element == 'electric') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#B3EE3A'
        } else if (element == 'fairy') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#C1CDCD'
        } else if (element == 'ground') {
            document.getElementById("pokeContainer" + poke).style.backgroundColor = '#8B7E66'
        }

    }
}


function loadMorePokemons() {
    pokemonCount = pokemonCount + 5;
    let pokemons = document.getElementById('pokemons');
    pokemons.innerHTML = '';
    loadPokemons();
}


async function openBigPokeContainer(poke) {
    let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    let response1 = await fetch(url);
    bigPokemon = await response1.json();

    let element = bigPokemon['types']['0']['type']['name'];
    document.getElementById('bigPokeContainer').classList.remove('d-none')
    document.getElementById('bigPokeContainer').classList.add('bigPokeContainer')
    let bigPokeContainer = document.getElementById('bigPokeContainer');

    bigPokeContainer.innerHTML = '';
    bigPokeContainer.innerHTML += templateBigPoke(bigPokemon);

    if (element == 'grass') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#99C262'
    } else if (element == 'fire') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#FF3030'
    } else if (element == 'water') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#1C86EE'
    } else if (element == 'poison') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#8a2be2'
    } else if (element == 'bug') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#54FF9F'
    } else if (element == 'normal') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#D2691E'
    } else if (element == 'electric') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#B3EE3A'
    } else if (element == 'fairy') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#C1CDCD'
    } else if (element == 'ground') {
        document.getElementById("pokeContainerBig").style.backgroundColor = '#8B7E66'
    }
    document.getElementById('pokemonsOverContainer').classList.add('d-none');
}

function openBaseStats() {
    document.getElementById('about').classList.add('d-none');
    document.getElementById('baseStatsCont').classList.remove('d-none');
    document.getElementById('aboutCont').classList.remove('underline');
    document.getElementById('baseStats').classList.add('underline');
}

function openAbout() {
    document.getElementById('baseStatsCont').classList.add('d-none');
    document.getElementById('about').classList.remove('d-none');
    document.getElementById('aboutCont').classList.add('underline');
    document.getElementById('baseStats').classList.remove('underline');
}

function goBack() {
    document.getElementById('bigPokeContainer').classList.remove('bigPokeContainer')
    document.getElementById('bigPokeContainer').classList.add('d-none')
    document.getElementById('pokemonsOverContainer').classList.remove('d-none');
}


async function searchNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
 
    let url = `https://pokeapi.co/api/v2/pokemon/${search}`;
    let response1 = await fetch(url);
    searchPokemon = await response1.json();

    let name = search;
    name.toLowerCase;
   
  if (searchPokemon['name']) {
    openBigPokeContainer(search);
  }
}




function renderPokemonInfo1(poke){
    return`
        <div class="pokeContainer" id="pokeContainer${poke}" onclick="openBigPokeContainer(${poke})">
        <div class="pokeHeader">
            <div class="pokemonName" id="pokemonName">${currentPokemon['name']}</div>
            <div class="id" id="id">${currentPokemon['id']}</div>
        </div>
        <div class="pokeContainerBottom">
            <div class="pokeContainerBottomLeft">
                <div class="pokeElement"><div class="pokeElementDiv">${currentPokemon['types']['0']['type']['name']}</div></div>
                <div class="pokeType"><div class="pokeTypeDiv">${currentPokemon['types']['1']['type']['name']}</div></div>
            </div>
            <div class="pokemonPictureDiv"><img class="pokemonPicture" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}"></div>
        </div>
    </div>
        `;
    }
    
    function renderPokemonInfo2(poke){
        return`
        <div class="pokeContainer" id="pokeContainer${poke}" onclick="openBigPokeContainer(${poke})">
        <div class="pokeHeader">
            <div class="pokemonName" id="pokemonName">${currentPokemon['name']}</div>
            <div class="id" id="id">${currentPokemon['id']}</div>
        </div>
        <div class="pokeContainerBottom">
            <div class="pokeContainerBottomLeft">
                <div class="pokeElement"><div class="pokeElementDiv">${currentPokemon['types']['0']['type']['name']}</div></div>
            </div>
            <div class="pokemonPictureDiv"><img class="pokemonPicture" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}"></div>
        </div>
    </div>
        `;
    }


    function templateBigPoke(bigPokemon){
        return`
        <div class="pokeContainerBig" id="pokeContainerBig">
        <div class="pokeHeaderBig">
            
            <div class="pokemonName" id="pokemonName">${bigPokemon['name']}</div>
            <div class="id" id="id">${bigPokemon['id']}</div>
        </div>
        <div class="pokeContainerBottom">
            <div class="pokeContainerBottomLeft">
            <div class="pokeElement"><div class="pokeElementDiv">${bigPokemon['types']['0']['type']['name']}</div></div>
            </div>
            <div class="goBack" id="goBack"><img src="./img/back.png" onclick="goBack()"></img></div>
        </div>
        <div class="infoContainerBig">
        
            <div class="imgContainer">
                <image id="pokemonPictureBig"> <img class="pokemonPictureBig"
                        src="${bigPokemon['sprites']['other']['dream_world']['front_default']}"></image>
            </div>
            <div class="stats" id="stats">
                <div class="statsUnderContainer1">
                    <div class="aboutCont underline" id="aboutCont"><a onclick="openAbout()" href="#">About</a></div>
                    <div class="baseStatsBtn" id="baseStats"><a onclick="openBaseStats()" href="#">Base Stats</a></div>
                </div>
            <div class="about" id="about">
                <div class="statsUnderContainer" id="statsUnderContainer">
                    <div>
                        <table class="don">
                            <tr><td>Abilitie</td></tr>
                            <tr><td>Height</td></tr>
                            <tr><td>Weight</td></tr>
                        </table>
                    </div>
                    <table>
                        <tr><td>${bigPokemon['abilities'][0]['ability']['name']}</td></tr>
                        <tr><td>${bigPokemon['height']} cm</td></tr>
                        <tr><td>0,${bigPokemon['weight']} Kg</td></tr>
                    </table>
                </div>
            </div>
            <div class="baseStatsCont d-none" id="baseStatsCont">
            <div class="statsUnderContainer statsUnderContainer2">
                <div>
                    <table class="don">
                        <tr><td>HP</td></tr>
                        <tr><td>Attack</td></tr>
                        <tr><td>Defense</td></tr>
                        <tr><td>Sp. Atk</td></tr>
                        <tr><td>Sp. Def</td></tr>
                        <tr><td>Speed</td></tr>
                    </table>
                </div>
                <table class="don">
                    <tr><td>${bigPokemon['stats']['0']['base_stat']}</td></tr>
                    <tr><td>${bigPokemon['stats']['1']['base_stat']}</td></tr>
                    <tr><td>${bigPokemon['stats']['2']['base_stat']}</td></tr>
                    <tr><td>${bigPokemon['stats']['3']['base_stat']}</td></tr>
                    <tr><td>${bigPokemon['stats']['4']['base_stat']}</td></tr>
                    <tr><td>${bigPokemon['stats']['5']['base_stat']}</td></tr>
                </table>
            </div>
        </div>
      </div>
    </div>`;
    }