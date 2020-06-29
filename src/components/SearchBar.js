import React from "react";

export const SearchBar = ({ onSearch }) => (
  <div>
    <input
      type="text"
      onChange={onSearch}
      className="form-control"
      placeholder="Search..."
    />
  </div>
);
