import React, { useContext } from "react";
import Book from "./Book";
import { booksContext } from "../App";

const Shelf = ({ shelf }) => {
  const books = useContext(booksContext);
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
              {shelfBooks.map((book, i) => (
                <li key={i}>
                  <Book book={book} />
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
