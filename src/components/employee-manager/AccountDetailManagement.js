import React, { useState } from "react";
import MyAccount from "../customer/MyAccount";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  updateAccounts,
  deleteAccounts,
} from "../../api/management-account-service";
import alertify from "alertifyjs";

const AccountDetailManagement = () => {
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const onSubmit = (accountId) => {
    setUpdating(true);
    updateAccounts(accountId)
      .then((resp) => {
        setUpdating(false);
        toast("User was updated successfully");
      })
      .catch((err) => {
        toast(err.response.data.message);
        setUpdating(false);
      });
  };
  const handleDelete = (accountId) => {
    alertify.confirm("Delete", "Are you sure want to delete?", () => {
      setDeleting(true);
      deleteAccounts(accountId)
        .then((resp) => {
          setDeleting(false);
          toast("Customer was deleted uccessfully");
        })
        .catch((err) => {
          setDeleting(false);
          toast(err.response.data.message);
        });
    });
  };

  return (
    <>
      <div className="text-end">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            type="button"
            variant="secondary"
            onClick={onSubmit}
          >
            Update
          </Button>
          <Button
            type="button"
            variant="danger"
            disabled={deleting}
            onClick={handleDelete}
          >
            {deleting && (
              <Spinner animation="border" variant="light" size="sm" />
            )}{" "}
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default AccountDetailManagement;
