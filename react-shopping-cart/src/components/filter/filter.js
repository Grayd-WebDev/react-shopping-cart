import React, { Component } from "react";
import "./filter.css";

export default class filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter__result">{this.props.count} Products</div>
        <div className="filter__sort">
          Order {" "}
          <select value={this.props.sort} onChange={this.props.onSort}>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter__size">
          Filter {" "}
          <select value={this.props.size} onChange={this.props.onFilter}>
            <option value="">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
