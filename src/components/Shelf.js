import Book from "./Book";

const Shelf = ({ shelf, update, setBook, books, setShelf }) => {
  const shelfBooks = books.filter((book) => book.shelf === shelf.name);
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <div className="bookshelf-title">
            <h2>{shelf.title}</h2>

            <small className="bookshelf-subtitle">
              {" "}
              you have {shelfBooks.length} books on this shelf
            </small>
          </div>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {shelfBooks.map((book) => (
                <li key={book.id}>
                  <Book
                    currentBook={book}
                    update={update}
                    setBook={setBook}
                    setShelf={setShelf}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
