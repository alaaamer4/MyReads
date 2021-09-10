import React, { useContext, useState, useEffect } from "react";
import { bookContext } from "../App";
import { get } from "../BooksAPI";

const Book = (props) => {
  const { setBook } = useContext(bookContext);
  const [selected, setSelected] = useState(props.book.shelf);

  useEffect(() => {
    let mounted = true;
    !props.book.shelf &&
      get(props.book.id).then((res) => mounted && setSelected(res.shelf));
    return () => (mounted = false);
  }, [props.book]);
  // this function was created to reset the state so it can re-render again if the same shelf is used more than once
  const reset = () => {
    setSelected(props.book.shelf);
    setBook({ current: null, shelf: selected });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(
      value,

      setBook({ current: props.book, shelf: value })
    );
    setTimeout(() => {
      reset();
    }, false);
  };

  return (
    <div className="book">
      <div className="book-top">
        {props.book.imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
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
        <div className="book-shelf-changer">
          <select
            className="shelf-select"
            onChange={handleChange}
            value={selected ? selected : "none"}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
};

export default Book;
