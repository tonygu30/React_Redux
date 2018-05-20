
import React from 'react';
import ItemBox from './ItemBox';


const ItemList = ({ Item, onAlert, addCar }) => (
  <div className="item-list">
    {
      Item.map(item => (
        <ItemBox onAlert={onAlert} addCar={addCar} {...item} key={item.id} />
      ))
    }

  </div>
);


export default ItemList;
