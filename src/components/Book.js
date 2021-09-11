import React from "react";

import ShelfChanger from "./ShelfChanger";

const Book = ({ currentBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        {currentBook.imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${currentBook.imageLinks.thumbnail})`,
            }}
          >
            {" "}
          </div>
        ) : (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              background: "#f3f3f3",
            }}
          >
            {" "}
            no image provided for this book
          </div>
        )}
        <ShelfChanger currentBook={currentBook} />
      </div>
      <div className="book-title">{currentBook.title}</div>
      <div className="book-authors">{currentBook.authors.join(", ")}</div>
    </div>
  );
};

export default Book;
