/*console.log('Hello console!');
import SodexoLunchMenu from 'sodexo-day-example';
// Test
console.log(SodexoLunchMenu.courses);*/

/* const coursesEn = ["Hamburger, cream sauce and boiled potatoes",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"]; */
/*
const nappi_1 = document.getElementById("kieli_en");
const nappi_2 = document.getElementById("kieli_fi");
let coursesEn = [];
let coursesFi = [];
let menu = coursesFi;
nappi_1.style.display = "block";
nappi_2.style.display = "none";
display();

const parseSodexoMenu = (sodexoDailyMenu) => {
  const courses = Object.values(sodexoDailyMenu);
  for (const course of courses) {
    coursesFi.push(course.category + ": " +  course.title_fi);
    coursesEn.push(course.title_en);
  }
};

function display() {
  const list = document.querySelector('#ravintola1');
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

function changeLangEn() {
  menu = coursesEn;
  display();
  nappi_1.style.display = "none";
  nappi_2.style.display = "block";
}
function changeLangFi() {
  menu = coursesFi;
  display();
  nappi_1.style.display = "block";
  nappi_2.style.display = "none";
}

function sort(menu, dir) {
  menu.sort();
  //descending
  if (dir == 0) {
    menu.reverse();
  }
  display();
}

function pickRandom() {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
}

const displayRandomCourse = () => {
  alert('Maybe you shoud try: ' + pickRandom(menu));
};

*/

import LunchMenu from './sodexo-day-example.json';

const restaurant = document.querySelector('.menu_ravintola1');
const finButton = document.querySelector('.finButton');
const engButton = document.querySelector('.engButton');

let reverseButton;
let randomButton;

var i, menuFi = [], menuEn = [];


for (i in LunchMenu.courses) {
  menuFi[i] =  LunchMenu.courses[i].title_fi;

}

for (i in LunchMenu.courses) {
  menuEn[i] =  LunchMenu.courses[i].title_en;

}

console.log(menuFi);
console.log(menuEn);



const randomEnMeal = () => {
  const randomItemEnglish = menuEn[Math.floor(Math.random() * menuEn.length)];
  alert(randomItemEnglish);
 };

 const randomFiMeal = () => {
  const randomItemFinnish = menuFi[Math.floor(Math.random() * menuFi.length)];
  alert(randomItemFinnish);
 };

const reverseFinMenu = () => {
  restaurant.innerHTML = menuFi.sort().reverse().join('<br><br>');
  reverseButton = document.createElement('button');
  restaurant.appendChild(reverseButton);
  reverseButton.textContent = 'Palauta';
  reverseButton.addEventListener('click', finnishMenu);
};

const reverseEnMenu = () => {
  restaurant.innerHTML = menuEn.sort().reverse().join('<br><br>');
  reverseButton = document.createElement('button');
  randomButton = document.createElement('button');
  restaurant.appendChild(reverseButton);
  restaurant.appendChild(randomButton);
  reverseButton.textContent = 'reset alphabetical order';
  randomButton.textContent = 'random Meal';
  reverseButton.addEventListener('click', englishMenu);
  randomButton.addEventListener('click', randomEnMeal);
};

const finnishMenu = () => {
  restaurant.innerHTML = menuFi.sort().join('<br><br>');;
  reverseButton = document.createElement('button');
  randomButton = document.createElement('button');
  reverseButton.textContent = 'Järjestä';
  randomButton.textContent = 'Satunnainen ateria';
  restaurant.appendChild(reverseButton);
  restaurant.appendChild(randomButton);
  reverseButton.addEventListener('click', reverseFinMenu);
  randomButton.addEventListener('click', randomFiMeal);

};

const englishMenu = () => {
  restaurant.innerHTML = menuEn.sort().join('<br><br>');
  reverseButton = document.createElement('button');
  randomButton = document.createElement('button');
  reverseButton.textContent = 'Reverse Menu';
  randomButton.textContent = 'Random Meal';
  restaurant.appendChild(reverseButton);
  restaurant.appendChild(randomButton);
  reverseButton.addEventListener('click', reverseEnMenu);
  randomButton.addEventListener('click', randomEnMeal);
};




finButton.addEventListener('click', finnishMenu);
engButton.addEventListener('click', englishMenu);

finnishMenu();

