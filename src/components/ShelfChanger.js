import React, { useState, useContext } from "react";
import { storeContext } from "../App";
const ShelfChanger = ({ currentBook }) => {
  const { setBook, setShelf, forceUpdate } = useContext(storeContext);
  const [selectedShelf, setSelectedShelf] = useState(currentBook.shelf);
  const handleChange = (e) => {
    const value = e.target.value;
    setBook(currentBook);
    setShelf(value);
    setSelectedShelf(value);
    // i'm trying to fire a force rerender because for some reason sometimes it doesn't work
    forceUpdate();
    // reset function
    setTimeout(() => {
      setBook(null);
      setShelf(null);
    }, false);
  };
  return (
    <div className="book-shelf-changer">
      <select
        className="shelf-select"
        onChange={handleChange}
        value={selectedShelf || "none"}
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
  );
};

export default ShelfChanger;
