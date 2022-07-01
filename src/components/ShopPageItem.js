import React from 'react';

function ShopPageItem({ item }) {
  return (
    <div className="item">
      <div className="sub-wrapper">
        <img className="shop-item-img" src={item.image} alt={item.description} />
        <div className="item-title">{item.title}</div>
      </div>
      <div className="sub-wrapper">
        <div className="item-price">
          $
          {item.price}
        </div>
      </div>
    </div>
  );
}

export default ShopPageItem;
