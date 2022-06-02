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
