

const shppingList = [];


const buyCar = (state = shppingList, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [
        ...state,
        {
          id: action.id,
          images: action.images,
          text: action.text,
          money: action.money,
          num: action.num,
        },
      ];

    default:
      return state;
  }
};


export default buyCar;
