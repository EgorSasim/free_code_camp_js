const books = [
  {
    title: "title1",
    authorName: "author1",
    releaseYear: 2025,
  },
   {
    title: "title2",
    authorName: "author2",
    releaseYear: 2024,
  }, {
    title: "title3",
    authorName: "author3",
    releaseYear: 2023,
  },
]

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear === book2.releaseYear) {
    return 0
  } else {
    return 1;
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 2024);

filteredBooks.sort(sortByYear);

