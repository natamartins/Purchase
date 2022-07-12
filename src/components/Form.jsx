import React from "react";
import {  TextField, MenuItem } from "@material-ui/core";
const units = ["kg", "lt", "un"];

const Form = () => {
  return (
    <form>
        <TextField
          label="List"
          name="list"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          label="Product"
          name="product"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          label="Quantity"
          name="quantity"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          select
          label="Unity"
          name="unity"
          value={""}
          onChange={() => {}}
          required
        >
          {units.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Price"
          name="price"
          value={""}
          onChange={() => {}}
          required
        />
    </form>
  );
};

export default Form;
