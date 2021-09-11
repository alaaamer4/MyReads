import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Home from "./routes/Home";
import Search from "./routes/Search";
import "./App.css";

const BooksApp = () => {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);
  const [shelf, setShelf] = useState(null);
  const [flip, setFlip] = useState(true);

  const updateBooks = () => {
    setFlip(!flip);
  };
  const changeBook = (book) => {
    setBook(book);
  };
  const changeBookShelf = (shelf) => {
    setShelf(shelf);
  };

  useEffect(() => {
    let mounted = true;
    mounted &&
      getAll()
        .then((res) => {
          mounted && setBooks(res);
        })
        .catch((err) => console.log(err));
    mounted && book && update(book, shelf);
    return () => (mounted = false);
  }, [book, shelf]);
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/">
          {books && (
            <Home
              update={updateBooks}
              setShelf={changeBookShelf}
              setBook={changeBook}
              books={books}
            />
          )}
        </Route>
        <Route path="/search">
          <Search
            update={updateBooks}
            setShelf={changeBookShelf}
            setBook={changeBook}
            shelfBooks={books}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default BooksApp;
