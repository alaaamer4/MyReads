import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Home from "./routes/Home";
import Search from "./routes/Search";
import "./App.css";

export const booksContext = React.createContext();
export const shelfContext = React.createContext();
export const bookContext = React.createContext();
const BooksApp = () => {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState({ current: null, shelf: null });

  const { current, shelf } = book;
  useEffect(() => {
    let mounted = true;
    mounted &&
      getAll()
        .then((res) => mounted && setBooks(res))
        .catch((err) => console.log(err));
    mounted && current && update(current, shelf);

    return () => (mounted = false);
  }, [setBooks, current, shelf]);
  return (
    <booksContext.Provider value={books}>
      <bookContext.Provider value={{ book, setBook }}>
        <div className="app">
          <BrowserRouter>
            <Route exact path="/">
              {books && <Home />}
            </Route>
            <Route path="/search" component={Search} />
          </BrowserRouter>
        </div>
      </bookContext.Provider>
    </booksContext.Provider>
  );
};

export default BooksApp;
