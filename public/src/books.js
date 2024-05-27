/**
  Authors -- 
  {
    "id": 0,
    "name": {
      "first": "Lucia",
      "last": "Moreno"
    }
  }

  Books -- 

  {
    "id": "5f4471327864ee880caf5afc",
    "title": "reprehenderit quis laboris adipisicing et",
    "genre": "Poetry",
    "authorId": 20,
    "borrows": [
      {
        "id": "5f446f2e2a4fcd687493a775",
        "returned": false
      },
      {
        "id": "5f446f2ebe8314bcec531cc5",
        "returned": true
      },
      {
        "id": "5f446f2ea508b6a99c3e42c6",
        "returned": true
      }
    ]
  }
 */

function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  return books.find((book) => book.id === id);
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
