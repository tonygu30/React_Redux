import axios from 'axios';

const list = [];

const product = (state = list, action) => {
  switch (action.type) {
    case 'DEFAULT_DATA':
      return [
        ...action.data,
      ];
    case 'ON_ALERT':
      alert(action.id);
      break;
    default:
      return state;
  }
};


export default product;
