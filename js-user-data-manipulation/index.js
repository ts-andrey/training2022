// user name showing

const userHeader = document.querySelector('h1');
const input = document.querySelector('.user-form__input');
const btn = document.querySelector('.user-form__btn');
let username;

try {
  username = localStorage.getItem('username');
  setUserHeader();
} catch (error) {
  console.log(error);
}

btn.addEventListener('click', event => {
  event.preventDefault();
  console.log(input.value);
  username = input.value;
  localStorage.setItem('username', username);
  setUserHeader();
});

// setUserHeader();

function setUserHeader() {
  if (username) {
    userHeader.innerText = `Hello ${username}`;
  } else {
    userHeader.innerText = '';
  }
}

// theme changing

const themeWrapper = document.querySelector('.theme__wrapper');
const themeInputs = document.querySelectorAll('.theme__input');
const THEME_LIGHT = 'theme__light';
const THEME_DARK = 'theme__dark';
let theme;

themeWrapper.addEventListener('click', ev => {
  ev.stopImmediatePropagation();
  themeInputs.forEach(el => {
    if (el.checked) {
      theme = el.value;
      setTheme();
    }
  });
});

try {
  theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    themeInputs[0].checked = true;
  } else if (theme === 'light') {
    themeInputs[1].checked = true;
  }
} catch (error) {
  theme = 'light';
  themeInputs[1].checked = true;
  console.log(error);
}

setTheme();

function setTheme() {
  if (theme === 'dark') {
    document.body.classList.remove(THEME_LIGHT);
    document.body.classList.add(THEME_DARK);
  } else {
    document.body.classList.remove(THEME_DARK);
    document.body.classList.add(THEME_LIGHT);
  }
  localStorage.setItem('theme', theme);
}

// create table

const main = document.createElement('main');
const tableWrapper = document.createElement('div');
tableWrapper.classList.add('table-wrapper');
const table = document.createElement('table');

const thead = document.createElement('thead');

const trow = document.createElement('tr');
const theadTitle = document.createElement('th');
theadTitle.innerText = 'Title';
const theadCategory = document.createElement('th');
theadCategory.innerText = 'Category';
const theadDescription = document.createElement('th');
theadDescription.innerText = 'Description';
const theadLink = document.createElement('th');
theadLink.innerText = 'Link';

trow.append(theadTitle, theadCategory, theadDescription, theadLink);
thead.append(trow);

const tbody = document.createElement('tbody');
table.append(thead, tbody);
tableWrapper.append(table);
main.append(tableWrapper);

// data fetching

const title = document.getElementById('title');
const category = document.getElementById('category');

const API = 'https://api.publicapis.org';

async function getData(event, type) {
  event.preventDefault();
  tbody.innerHTML = '';
  let queryObj;
  if (type === 'category') {
    queryObj = { category: category.value };
  } else if (type === 'title') {
    queryObj = { title: title.value };
  } else {
    queryObj = { title: title.value, category: category.value };
  }
  let data;
  const url = `${API}/entries?` + new URLSearchParams(queryObj);
  const resp = await fetch(url).catch(err => console.log(err.message));
  try {
    data = await resp.json();
    console.log(data);
    data.entries.forEach(el => {
      const row = document.createElement('tr');

      const title = document.createElement('td');
      title.innerText = el.API;

      const description = document.createElement('td');
      description.innerText = el.Description;

      const category = document.createElement('td');
      category.innerText = el.Category;

      const link = document.createElement('td');
      link.innerText = el.Link;

      row.append(title, category, description, link);
      tbody.append(row);
    });
    document.body.append(main);
  } catch (error) {
    console.log(error);
  }
}
