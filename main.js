// Library Storage
const libraryStorage = [];

// Create new book to be added to the library
function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

//Example book creation (for testing purposes)
let testBook = new Book("An example book", "John Smith", 357, false);
let testBook2 = new Book("An example book", "John Smith", 357, false);
let testBook3 = new Book("An example book", "John Smith", 357, false);
let testBook4 = new Book("An example book", "John Smith", 357, false);

//handle form input to create new book object
function handleBookInput(e) {
	e.preventDefault();
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const pages = parseInt(document.getElementById("pages").value, 10);
	const isRead = document.getElementById("isRead").value;

	const newBook = new Book(title, author, pages, isRead);
	console.log(addBookToLibrary(newBook));
}

//Add book
const addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener("click", handleBookInput);

// Add book to the library (ensure book meets required properties)
function addBookToLibrary(book) {
	if (book.title !== "" && book.author !== "" && book.pages > 0) {
		libraryStorage.push(book);
		displayLibrary(libraryStorage); // Update display after adding a book
		return "Your book was added to your library!";
	} else {
		return "Unable to add your book to the library, please try again!";
	}
}

function displayLibrary(library) {
	const myLibrary = document.getElementById("library");
	myLibrary.textContent = "";

	libraryStorage.forEach((book) => {
		//create book container
		const bookElem = document.createElement("div");
		bookElem.classList.add("book");

		// add book title
		const bookTitle = document.createElement("p");
		bookTitle.classList.add("title");
		bookTitle.textContent = book.title;
		bookElem.appendChild(bookTitle);

		// add book author
		const bookAuthor = document.createElement("p");
		bookAuthor.classList.add("author");
		bookAuthor.textContent = book.author;
		bookElem.appendChild(bookAuthor);

		// add page amount
		const bookPages = document.createElement("p");
		bookPages.classList.add("pages");
		bookPages.textContent = book.pages;
		bookElem.appendChild(bookPages);

		// isRead?
		const isRead = document.createElement("p");
		isRead.classList.add("pages");
		isRead.textContent = book.isRead;
		bookElem.appendChild(isRead);

		myLibrary.appendChild(bookElem);
	});
}

displayLibrary(libraryStorage);
console.log(libraryStorage);
