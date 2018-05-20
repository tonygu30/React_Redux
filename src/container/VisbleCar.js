import React from 'react';
import ShoppingCar from '../components/ShoppingCar';
import { connect } from 'react-redux';
// import { addCar, onAlert } from '../actions';


const mapStateToProps = state => ({
  buyItem: state.buyCar,

});

const mapDispatchToProps = {

};

const VisibleItem = connect(
  mapStateToProps,
  mapDispatchToProps,

)(ShoppingCar);


export default VisibleItem;
