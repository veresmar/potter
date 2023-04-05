import {data as characters} from 'data.js';

const container = document.createElement('div');
container.className = 'container';

main.append(container);
const input = document.querySelector("#findCharacterName");


function findName() {
  let value = input.value.toLowerCase().trim();
  container.innerHTML = '';
  let sort = characters.filter(el => 
    el.keywords.toLowerCase().trim().includes(value) || '');
  renderCard(sort);
}

input.addEventListener('input', findName)

function renderCard(data) {
  data.forEach(element => createCard(element));
}

renderCard(characters);


function createCard(obj) {
  const card = document.createElement('div');
  card.className = 'card';

  const name = document.createElement('h2');
  name.className = 'card_character-name';
  name.textContent = `${obj.name}`

  const actor = document.createElement('p');
  actor.className = 'card_character-actor';
  actor.textContent = `${obj.actor}`;

  const gender = document.createElement('p');
  gender.className = 'card_character-gender';
  gender.textContent = `${obj.gender}`;

  const house = document.createElement('p');
  house.className = 'card_character-house';
  house.textContent = `${obj.house}`;

  const wand = document.createElement('p');
  wand.className = 'card_character-wand';
  wand.textContent = `${obj.wand}`;

  const alive = document.createElement('p');
  alive.className = 'card_character-alive';
  alive.textContent = `${obj.alive}`;


  card.append(name, actor, gender, house, wand, alive);
  container.append(card);
}