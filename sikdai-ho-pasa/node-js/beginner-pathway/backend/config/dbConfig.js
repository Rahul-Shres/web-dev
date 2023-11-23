// This code helps connect to a database.
// Think of a database like a special book where we store lots of information.

module.exports = {
  // HOST is like the address where the book is kept, like a library's address.
  HOST: "localhost",

  // USER is the librarian's name who can access the book, like a special key to open the book.
  USER: "root",

  // PASSWORD is the secret code to open the book, like a secret password or PIN.
  PASSWORD: "",

  // DB is the name of the specific book we want to use, like the title of the book in the library.
  DB: "cms",

  // dialect is the type of language the book uses, like English, Spanish, etc.
  dialect: "mysql",

  // pool contains some rules about how many people can use the book at the same time.
  pool: {
    max: 5,       // Maximum number of people allowed to use the book at once.
    min: 0,       // Minimum number of people required to keep the book available.
    acquire: 30000,  // How long to wait to get the book before giving up.
    idle: 10000,  // How long the book can sit unused before putting it away.
  },
};
