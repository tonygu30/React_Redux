import React from 'react';
import ItemList from '../components/ItemList';
import { connect } from 'react-redux';
import { addCar, onAlert } from '../actions';


const mapStateToProps = state => ({
  Item: state.product,
});

const mapDispatchToProps = dispatch => ({
  onAlert(id) {
    dispatch(onAlert(id));
  },
  addCar(id, images, text, money, num) {
    dispatch(addCar(id, images, text, money, num));
  },
});

const VisibleItem = connect(
  mapStateToProps,
  mapDispatchToProps,

)(ItemList);


export default VisibleItem;
