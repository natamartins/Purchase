import React, { Component } from "react";
import { Button, InputAdornment, MenuItem, TextField } from "@material-ui/core";
const units = ["kg", "lt", "un"];

class Form extends Component {
  state = {
    list: "",
    product: "",
    quantity: "",
    unit: "",
    price: "",
    showErros: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    const { list, product, quantity, unit, price } = this.state;
    this.props.addProduct({ product, quantity, unit, price }, list);
    // if (!list || !product || !price || !unit || !quantity) {
    //   this.setState({ showErros: true });
    // } else {
    //   this.props.addProduct({ product, quantity, unit, price }, list);
    //   this.setState({
    //     list: "",
    //     product: "",
    //     quantity: "",
    //     unit: "",
    //     price: "",
    //     showErros: false,
    //   });
    // }
  };

  render() {
    return (
      <form>
        <div>
          <TextField
            label="Lista"
            name="list"
            value={this.state.list}
            onChange={this.handleChange}
            required
            error={!this.state.list && this.state.showErros}
          />
          <Button variant="outlined" onClick={this.handleSubmit}>
            Adicionar
          </Button>
        </div>
        <TextField
          label="Produto"
          name="product"
          value={this.state.product}
          onChange={this.handleChange}
          required
          error={!this.state.product && this.state.showErros}
        />
        <TextField
          label="Quantidade"
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
          required
          error={!this.state.quantity && this.state.showErros}
        />
        <TextField
          label="Unidade"
          name="unit"
          value={this.state.unit}
          onChange={this.handleChange}
          required
          error={!this.state.unit && this.state.showErros}
        >
          {units.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField
          label="Preço"
          name="price"
          value={""}
          onChange={this.state.handleChange}
          required
          // error={!this.state.price && this.state.showErros}
          InputProps={{
            startAdornment: <InputAdornment>R$</InputAdornment>,
          }}
        /> */}
      </form>
    );
  }
}

export default Form;
