import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { search } from "../BooksAPI";
import Book from "../components/Book";
const Search = () => {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    mounted &&
      term &&
      search(term)
        .then((res) => {
          mounted && setBooks(res);
        })
        .catch((err) => setError(err));

    return () => (mounted = false);
  }, [term]);
  const onChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <form className="search-books-input-wrapper">
          <input
            value={term}
            onChange={onChange}
            type="text"
            placeholder="Search by title or author"
          />
        </form>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books &&
          books.length !== 0 &&
          books !== undefined &&
          Array.isArray(books) &&
          !error &&
          term !== "" ? (
            books.map((book, i) => (
              <li key={i}>
                <Book book={book} />
              </li>
            ))
          ) : (
            <div> No Search Item Was Found</div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
