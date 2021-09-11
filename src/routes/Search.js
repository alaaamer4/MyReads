import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import { storeContext } from "../App";
import Book from "../components/Book";

const Search = () => {
  const { shelfBooks } = useContext(storeContext);
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    mounted &&
      term &&
      search(term)
        .then((res) => {
          // mounted && setBooks(res);
          res.forEach((book) => {
            shelfBooks.forEach((shelfBook) => {
              if (book.id === shelfBook.id) {
                book.shelf = shelfBook.shelf;
              }
            });
          });
          setBooks(res);
        })
        .catch((err) => setError(err));

    return () => (mounted = false);
  }, [term, shelfBooks]);
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
            books.map((book) => (
              <li key={book.id}>
                <Book currentBook={book} />
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
