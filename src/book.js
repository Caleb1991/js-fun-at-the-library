function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return { 'name': name, 'age': age, 'pronouns': pronouns };
}

function saveReview(review, reviewArray) {
  if (!reviewArray.includes(review)){
    reviewArray.push(review);
    return reviewArray;
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, character, genre) {
  return { 'title': title, 'mainCharacter': character, 'genre': genre, 'pageCount': calculatePageCount(title) };
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}