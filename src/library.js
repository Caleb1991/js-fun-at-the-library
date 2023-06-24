var Shelf = require("../src/shelf.js")

function createLibrary(name) {
  return { 'name': name, 'shelves': { 'fantasy': [], 'fiction': [], 'nonFiction': [] } };
}

function addBook(library, book) {
  Shelf.shelfBook(book, library.shelves[book.genre]);
}

function checkoutBook(library, bookName, genre) {
  let shelf = library.shelves[genre]
  let titles = Shelf.listTitles(shelf);
  if (titles.includes(bookName)) {
    Shelf.unshelfBook(bookName, library.shelves[genre]);
    return `You have now checked out ${bookName} from the ${library.name}.`;
  } else {
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`;
  }
}

function takeStock(library, genre) {
  if (genre) {
    let totalBooksByShelf = library.shelves[genre].length;
    return `There are a total of ${totalBooksByShelf} ${genre} books at the ${library.name}.`;
  } else {
    let totalBooks = 0;
    for (let shelf in library.shelves) {
      totalBooks += library.shelves[shelf].length;
    }
    return `There are a total of ${totalBooks} books at the ${library.name}.`;
  }
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};