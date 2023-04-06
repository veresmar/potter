import {data as characters} from './data.js';
console.log(characters)
const container = document.createElement('div');
container.className = 'container';
const main = document.querySelector('main');
main.append(container);
const input = document.querySelector("#findCharacterName");
const select = document.querySelector("#school");


function findName() {
  let value = input.value.toLowerCase().trim();
  container.innerHTML = '';
  let sort = characters.filter(el => 
    el.name.toLowerCase().includes(value.toLowerCase()) || 
    el.actor.toLowerCase().includes(value.toLowerCase()));
  if (select.value !== "") {
    sort = sort.filter(el => el.house === select.value);
  }
  renderCard(sort);
}

// input.addEventListener('input', findName)

function renderCard(data) {
  data.forEach(element => createCard(element));
}

renderCard(characters);


function createCard(obj) {
  const card = document.createElement('div');
  card.className = 'card';

  
  const image = document.createElement("img");
  image.setAttribute("src", obj.image);

  
  const cardTestWrap = document.createElement('div');
  cardTestWrap.className = 'card_text-wrapper';

  const name = document.createElement('h2');
  name.className = 'card_character-name';
  name.textContent = obj.name;

  const actor = document.createElement('p');
  actor.className = 'card_character-actor';
  actor.textContent = `Actor: ${obj.actor}`;

  const gender = document.createElement('p');
  gender.className = 'card_character-gender';
  gender.textContent = `Gender: ${obj.gender}`;

  const house = document.createElement('p');
  house.className = 'card_character-house';
  house.textContent = `House: ${obj.house}`;

  const wand = document.createElement('p');
  wand.className = 'card_character-wand';
  wand.textContent = `Wand: ${obj.wand.wood}, ${obj.wand.core}, ${obj.wand.length}`;

  const alive = document.createElement('p');
  alive.className = 'card_character-alive';
  alive.innerText = obj.alive ? "Alive: yes" : "Alive: no";

  cardTestWrap.append(name, actor, gender, house, wand, alive);
  card.append(image, cardTestWrap);
  container.append(card);
}

input.addEventListener('input', findName);
select.addEventListener('change', findName);

renderCard(characters);