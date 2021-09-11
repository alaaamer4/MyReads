import React, { useContext } from "react";
import Book from "./Book";
import { storeContext } from "../App";
const Shelf = ({ shelf }) => {
  const { shelfBooks } = useContext(storeContext);
  const books = shelfBooks.filter((book) => book.shelf === shelf.name);
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <div className="bookshelf-title">
            <h2>{shelf.title}</h2>

            <small className="bookshelf-subtitle">
              {" "}
              you have {books.length} books on this shelf
            </small>
          </div>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book currentBook={book} />
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
