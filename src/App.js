import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Home from "./routes/Home";
import Search from "./routes/Search";
import "./App.css";
import NotFound from "./components/NotFound";

export const storeContext = React.createContext();
const BooksApp = () => {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);
  const [shelf, setShelf] = useState(null);
  const [flip, setFlip] = useState(true);
  const forceUpdate = () => {
    setFlip(!flip);
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
      <storeContext.Provider
        value={{
          shelfBooks: books,
          setBooks,
          book,
          setBook,
          shelf,
          setShelf,
          forceUpdate,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {books && <Home />}
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </storeContext.Provider>
    </div>
  );
};

export default BooksApp;
