

import React, { Component } from 'react';

const Nownum = 0;

class ItemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  componentDidMount() {
  }

  onClick = () => {
    this.setState({ num: 1 });
    this.props.addCar(
      this.props.id,
      this.props.images,
      this.props.text,
      this.props.money,
      this.state.num,
    );
  }

  plusNum = () => {
    this.setState({ num: this.state.num + 1 });
  }

  lessNum = () => {
    if (this.state.num <= 1) return;
    this.setState({ num: this.state.num - 1 });
  }

  render() {
    return (
      <div className="item" >
        <img src={`${this.props.images}`} alt="" />
        <h3>{this.props.text}</h3>
        <span>{`＄${this.props.money}`}</span>
        <span><b onClick={this.lessNum}>-</b>{`數量${this.state.num}`}<b onClick={this.plusNum}>+</b></span>
        <a className="add_car" onClick={this.onClick}>加入購物車</a>
      </div>
    );
  }
}


export default ItemBox;
