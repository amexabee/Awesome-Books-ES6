/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import { Book } from './modules/addnew.js';
import { BookListManger } from './modules/booklismanager.js';
import { DateTime } from './modules/luxon.js';

const bookListView = document.getElementById('booklist');

function initiew() {
  bookListView.innerHTML = '';
  const bookListManager = new BookListManger();
  bookListManager.bookList.forEach((element) => {
    const liNode = document.createElement('li');
    const pNode = document.createElement('p');
    const bookKText = document.createTextNode(
      `"${element.name}" by ${element.author}`,
    );
    pNode.appendChild(bookKText);
    const buttonNode = document.createElement('button');
    const removeKText = document.createTextNode('Remove');
    buttonNode.appendChild(removeKText);
    buttonNode.addEventListener('click', (event) => {
      event.preventDefault();
      bookListManager.removeBook(element, () => {
        initiew();
      });
    });
    liNode.appendChild(pNode);
    liNode.appendChild(buttonNode);
    bookListView.appendChild(liNode);
  });
}

function setUpNav() {
  document.getElementById('home').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('bokklist_div').style.display = 'block';
    document.getElementById('addnew_div').style.display = 'none';
    document.getElementById('contact_div').style.display = 'none';
  });

  document.getElementById('addnew').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('bokklist_div').style.display = 'none';
    document.getElementById('addnew_div').style.display = 'block';
    document.getElementById('contact_div').style.display = 'none';
  });

  document.getElementById('contact').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('bokklist_div').style.display = 'none';
    document.getElementById('addnew_div').style.display = 'none';
    document.getElementById('contact_div').style.display = 'block';
  });
}

window.addEventListener(
  'load',
  () => {
    initiew();
    setUpNav();
  },
  false,
);

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();
  const bookanme = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(bookanme, author, new Date().getTime());
  new BookListManger().addNewBook(newBook);
  location.reload();
});

const date = DateTime.now();
const dateNow = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
document.getElementById('timeDate').innerHTML = dateNow;
document.addEventListener('DOMContentLoaded', Actions.display);
close.addEventListener('click', () => {
  popup.classList.add('display');
});
