import React, { useEffect, useState } from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({ currentBook, update, setBook, setShelf, shelfBooks }) => {
  const [sharedBook, setSharedBook] = useState([]);
  useEffect(() => {
    const getBook = (shelfBooks, currentBook) => {
      setSharedBook(
        shelfBooks.filter((shelfBook) => shelfBook.id === currentBook.id)
      );
    };
    shelfBooks && getBook(shelfBooks, currentBook);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return sharedBook && sharedBook.length === 0 ? (
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
        <ShelfChanger
          update={update}
          setBook={setBook}
          currentBook={currentBook}
          setShelf={setShelf}
        />
      </div>
      <div className="book-title">{currentBook.title}</div>
      <div className="book-authors">{currentBook.authors}</div>
    </div>
  ) : (
    <div className="book">
      <div className="book-top">
        {sharedBook[0].imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${sharedBook[0].imageLinks.thumbnail})`,
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
        <ShelfChanger
          update={update}
          setBook={setBook}
          currentBook={sharedBook[0]}
          setShelf={setShelf}
        />
      </div>
      <div className="book-title">{sharedBook[0].title}</div>
      <div className="book-authors">{sharedBook[0].authors}</div>
    </div>
  );
};

export default Book;
