import React, { useState } from "react";
// ========== components ==========
import Table from "./Table";
// ========== data ==========
import { Users } from "../data/users";
// ========== styles ==========
import classes from "./Search.module.css";

const Search = () => {
  // ========== variables ==========
  const keys = ["first_name", "last_name", "email"];

  // ========== state ==========
  const [searchQuery, setSearchQuery] = useState("");

  // ========== handlers ==========
  const searchInputHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchFilterHandler = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.search}
        type="text"
        placeholder="Search..."
        onChange={searchInputHandler}
      ></input>
      <Table data={searchFilterHandler(Users)} />
    </div>
  );
};

export default Search;