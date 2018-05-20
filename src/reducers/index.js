import { combineReducers } from 'redux';
import product from './product';
import buyCar from './buyCar';

const productApp = combineReducers({
  product, buyCar,
});

export default productApp;
