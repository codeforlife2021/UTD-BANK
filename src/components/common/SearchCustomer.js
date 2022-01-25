import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { searchCustomers } from "../../api/management-customer-service";

const SearchCustomer = (props) => {
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    if (value.length <= 3) {
      setData([]);
    } else {
      searchCustomers(e)
        .search(value)
        .then((resp) => {
          setData(resp.hits);
        });
    }
    props.onSearch(e);
  };

  return (
    <div className="search-customer">
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <FiSearch />
          &nbsp;Search
        </InputGroup.Text>

        <FormControl
          {...props}
          type="search"
          autoComplete="off"
          onChange={handleSearch}
        />
      </InputGroup>
    </div>
  );
};

export default SearchCustomer;
