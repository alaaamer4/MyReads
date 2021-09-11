import React, { useEffect, useState, useContext } from "react";
import { storeContext } from "../App";
import ShelfChanger from "./ShelfChanger";

const Book = ({ currentBook }) => {
  const { shelfBooks } = useContext(storeContext);
  const [sharedBook, setSharedBook] = useState();
  useEffect(() => {
    const getBook = (shelfBooks, currentBook) => {
      shelfBooks.filter((shelfBook) => {
        shelfBook.id === currentBook.id && setSharedBook(shelfBook);
        // shelfBook.id === currentBook.id && console.log(shelfBook);
        return shelfBook.id === currentBook.id;
      });
    };
    shelfBooks && getBook(shelfBooks, currentBook);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return !sharedBook ? (
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
      <div className="book-authors">{currentBook.authors}</div>
    </div>
  ) : (
    <div className="book">
      <div className="book-top">
        {sharedBook.imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${sharedBook.imageLinks.thumbnail})`,
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
        <ShelfChanger currentBook={sharedBook} />
      </div>
      <div className="book-title">{sharedBook.title}</div>
      <div className="book-authors">{sharedBook.authors}</div>
    </div>
  );
};

export default Book;
