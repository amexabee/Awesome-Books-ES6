export class BookListManger {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem("books"));
    if (this.bookList == null) {
      this.bookList = [];
    }
  }

  addNewBook(book) {
    this.bookList.push(book);
    localStorage.setItem("books", JSON.stringify(this.bookList));
  }

  removeBook(book, callBack) {
    this.bookList = this.bookList.filter(
      (singleBook) => book.id !== singleBook.id
    );
    localStorage.setItem("books", JSON.stringify(this.bookList));
    callBack();
  }
}
