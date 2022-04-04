'use strict';
import unicolor from '../node_modules/uniqolor/src/index.js';

function renderHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const mainHeader = document.createElement('h1');
  mainHeader.classList.add('header__header');
  mainHeader.innerText = 'Overview of npm task';

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('header__btn-wrapper');

  const bgHeaderButton = document.createElement('button');
  bgHeaderButton.innerText = 'randomize header bg color';
  bgHeaderButton.classList.add('header__btn', 'header__btn-bg');

  const colorHeaderButton = document.createElement('button');
  colorHeaderButton.innerText = 'randomize header text color';
  colorHeaderButton.classList.add('header__btn', 'header__btn-color');

  bgHeaderButton.addEventListener('click', () => {
    header.style.backgroundColor = `${unicolor.random({ light: false }).color}`;
  });
  colorHeaderButton.addEventListener('click', () => {
    mainHeader.style.color = `${unicolor.random({ light: true }).color}`;
  });

  btnWrapper.append(bgHeaderButton, colorHeaderButton);
  header.append(mainHeader, btnWrapper);
  return header;
}

function renderMain() {
  const main = document.createElement('main');
  main.classList.add('main');

  const secondHeader = document.createElement('h2');
  secondHeader.classList.add('main__header');

  secondHeader.append(...headerAnimate('Little color animation'));

  main.append(secondHeader);
  return main;
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  let gitLink = document.createElement('a');
  gitLink.classList.add('footer__gitLink');
  gitLink.setAttribute('href', 'https://github.com/ts-andrey/training2022');
  gitLink.setAttribute('target', '_blank');
  gitLink.innerText = 'Andrei Tsakunou Github';
  footer.append(gitLink);
  return footer;
}

function headerAnimate(string) {
  const array = string.split('');
  let result = [];
  let number = 500;
  array.forEach(el => {
    const char = document.createElement('span');
    char.innerText = el;
    setInterval(() => {
      char.style.color = unicolor.random().color;
    }, number);
    result.push(char);
    number += 50;
  });
  return result;
}

document.body.append(renderHeader(), renderMain(), renderFooter());
