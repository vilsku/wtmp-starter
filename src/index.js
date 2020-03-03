console.log('Hello console!');

const coursesEn = ["Hamburger, cream sauce and boiled potatoes",
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
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

const nappi_1 = document.getElementById("kieli_en");
const nappi_2 = document.getElementById("kieli_fi");
let menu = coursesFi;
nappi_1.style.display = "block";
nappi_2.style.display = "none";
display();

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


