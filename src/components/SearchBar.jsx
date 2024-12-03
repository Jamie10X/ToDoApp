import React from "react";

function SearchBar({ searched, setSearch }) {
  return (
    <form className="mb-4">
      <input
        type="text"
        placeholder="Search from here"
        value={searched}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
      />
    </form>
  );
}

export default SearchBar;
