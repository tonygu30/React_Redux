import React, { Component } from 'react';


class ShoppingItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="car_item">
        <span><img src={`${this.props.images}`} alt="" /></span>
        <span>{this.props.text}</span>
        <span>{this.props.money}</span>
        <span>{this.props.num}</span>
      </div>
    );
  }
}

// export default ShoppingItem;

export default ShoppingItem;
