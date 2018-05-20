import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem';

// const all_money = 0;

let tony = 0;
const ShoppingCar = ({ buyItem }) => {
  tony = 0;
  buyItem.map((item) => {
    tony += (parseInt(item.money) * parseInt(item.num));
  });
  return (
    <div className="buyCar">
      <h3><span>商品圖片</span>
        <span>商品名稱</span>
        <span>商品價格</span>
        <span>商品數量</span>
      </h3>
      {
      buyItem.map(item => (

        <ShoppingItem {...item} key={item.id} />

      ))
      }
      <span className="all-money">{`總價格${tony}`}</span>
    </div>
  );
};


// class ShoppingCar extends Component {
//   render() {
//     tony = 0;
//     this.props.buyItem.map((item) => {
//       tony += parseInt(item.money);
//     });
//     return (
//       <div className="buyCar">
//         {
//         this.props.buyItem.map(item => (
//           <ShoppingItem {...item} key={item.id} />
//         ))
//         }

//         {
//           tony
//         }
//       </div>

//     );
//   }
// }


export default ShoppingCar;
