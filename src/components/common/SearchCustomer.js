import React, { useState } from "react";

import { Form, FormControl, InputGroup } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { searchCustomers } from "../../api/management-customer-service";
import { toast } from "react-toastify";

const SearchCustomer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);
    searchCustomers(values)
      .then((resp) => {
        setLoading(false);
      })
      .catch((err) => {
        toast(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="search-customer">
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <FiSearch />
          &nbsp;Search
        </InputGroup.Text>

        <Form noValidate onSubmit={onSubmit}>
          <FormControl
            {...props}
            type="search"
            autoComplete="off"
            onChange={onSubmit}
            onClick={onSubmit}
          />{" "}
        </Form>
      </InputGroup>
      <ul>
        {data.map((item) => (
          <li
            key={item.objectID}
            onClick={() => {
              props.onSelect(props.name, `${item.firstName} ${item.lastName}`);
              setData([]);
            }}
          >
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCustomer;
