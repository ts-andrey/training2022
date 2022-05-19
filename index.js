const data = ['a', '7', 'b', '5', 'c', '8', 'd', '3', 'e', '9', 'g', 'h', 'j', 'k', '0', '1', '2', '4', 'f', '6'];
let isSortReversed = false;

const table = document.createElement('table');

// table header
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const header = document.createElement('th');
header.innerText = 'Sort data';

headerRow.append(header);
tableHeader.append(headerRow);

// attach sort event to the table header
headerRow.addEventListener('click', ev => {
  const tableData = [];
  // get data from the table and parse into array for easier sorting
  tableBody.childNodes.forEach(el => {
    tableData.push(el.firstChild.innerText);
  });
  // sort table
  tableData.sort((a, b) => a.localeCompare(b));
  if (isSortReversed) {
    tableData.reverse();
  }
  fillTable(tableData);
  isSortReversed = !isSortReversed;
});

// table body
const tableBody = document.createElement('tbody');
fillTable(data);

// insert table into the document when it has been completely loaded and parsed
window.addEventListener('DOMContentLoaded', event => {
  table.append(tableHeader, tableBody);
  document.body.append(table);
});

// table body filling function with provided data array
function fillTable(data) {
  tableBody.innerHTML = '';
  data.forEach(el => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute('contenteditable', 'true');
    td.innerText = el;
    tr.append(td);
    tableBody.append(tr);
  });
}
