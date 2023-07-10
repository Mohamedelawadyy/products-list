import React, { Component } from "react";

class addItem extends Component {
  state = {
    product: "",
    price: "",
    quantity: 1,
  };

  handleChange = (e) => {
    console.log(e.target.id + ": " + e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      product: "",
      price: "",
      quantity: 1,
    });
  };

  handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (!isNaN(quantity) && quantity > 0) {
      this.setState({ quantity });
    }
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            id="product"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            id="price"
            min="1"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.quantity}
            placeholder="Enter Quantity"
            id="quantity"
            onChange={this.handleQuantityChange}
            min="1"
            required
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default addItem;
