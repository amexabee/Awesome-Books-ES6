/* eslint-disable no-undef */

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
