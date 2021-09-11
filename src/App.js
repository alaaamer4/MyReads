import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Home from "./routes/Home";
import Search from "./routes/Search";
import "./App.css";

export const storeContext = React.createContext();
const BooksApp = () => {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);
  const [shelf, setShelf] = useState(null);

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
      <storeContext.Provider
        value={{ shelfBooks: books, setBooks, book, setBook, shelf, setShelf }}
      >
        <BrowserRouter>
          <Route exact path="/">
            {books && <Home />}
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </BrowserRouter>
      </storeContext.Provider>
    </div>
  );
};

export default BooksApp;
