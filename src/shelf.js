function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookName, shelf) {
  let booksAfterUnshelf = [];
  let originalLength = shelf.length;

  for (let book of shelf) {
    if (bookName != book.title) {
      shelfBook(book, booksAfterUnshelf);
    }
  }

  shelf.splice(0, originalLength)

  for (let book of booksAfterUnshelf) {
    shelfBook(book, shelf);
  }
}

function listTitles(shelf) {
  let titles = '';

  for (let i = 0; i < shelf.length; i++) {
    let ending = i + 1 == shelf.length ? '' : ', ';
    titles += `${shelf[i].title}${ending}`;
  }

  return titles;
}

function searchShelf(shelf, title) {
  let titles = [];

  for (let book of shelf) {
    titles.unshift(book.title);
  }

  return titles.includes(title);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
