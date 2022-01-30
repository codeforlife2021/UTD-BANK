import React, { useState } from "react";

import SsnList from "./SsnList";
import SearchBar from "./SearchBar";

import { searchCustomers } from "../../../api/searchCustomers";

function SearchBarFilter() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await searchCustomers.get("/", {});

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          Please Enter SSN Number
        </h2>
        <SearchBar onSearch={onSearch} />
        <SsnList results={state.results} />
      </div>
    </div>
  );
}

export default SearchBarFilter;
