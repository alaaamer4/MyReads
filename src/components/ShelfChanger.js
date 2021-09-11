import React, { useState } from "react";

const ShelfChanger = ({ update, setBook, currentBook, setShelf }) => {
  const [selectedShelf, setSelectedShelf] = useState(currentBook.shelf);
  const handleChange = (e) => {
    const value = e.target.value;
    setBook(currentBook);

    setShelf(value);

    // reset function
    setTimeout(() => {
      setBook(null);
      setShelf(null);
      update();
    }, false);
    setSelectedShelf(value);
  };
  return (
    <div className="book-shelf-changer">
      <select
        className="shelf-select"
        onChange={handleChange}
        value={selectedShelf ? selectedShelf : "none"}
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
