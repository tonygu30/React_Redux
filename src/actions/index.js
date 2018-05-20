

export const defaultData = data => ({
  type: 'DEFAULT_DATA',
  data,
});

export const onAlert = id => ({
  type: 'ON_ALERT',
  id,
});

export const addCar = (id, images, text, money, num) => ({
  type: 'ADD_CAR',
  id,
  images,
  text,
  money,
  num,
});

export const clearTodo = () => ({
  type: 'BUY_NUM',
});
