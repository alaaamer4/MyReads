import React from "react";
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

const Home = ({ update, setBook, books, setShelf }) => {
  const shelves = [
    { name: "currentlyReading", title: "Currently Reading" },
    { name: "wantToRead", title: "Want To Read" },
    { name: "read", title: "Read" },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {shelves &&
        shelves.map((shelf, i) => {
          return (
            <Shelf
              key={i}
              shelf={shelf}
              update={update}
              setBook={setBook}
              books={books}
              setShelf={setShelf}
            />
          );
        })}
      ;
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
export default Home;
