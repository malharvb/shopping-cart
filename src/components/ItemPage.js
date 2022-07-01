import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../styles/itempage.css';

function ItemPage({ handleAddToCartClick, itemsList, onItemCountChange }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const [retrievedItem] = itemsList.filter((el) => el.id === Number(id));

      setItem(retrievedItem);
    };

    fetchItem();
  }, []);

  if (item) {
    return (
      <div className="item-container">
        <img className="item-showcase-img" src={item.image} alt={item.title} />
        <div className="item-info">
          <div className="item-page-title">{item.title}</div>
          <div className="item-category">
            Category:
            {' '}
            {item.category}
          </div>
          <div className="item-desc">
            Description:
            {' '}
            <br />
            {item.description}
          </div>
          <div className="item-price">
            $
            {item.price}
          </div>
          <div className="sub-wrapper">
            <ItemCount
              relitemid={item.id}
              onItemCountChange={onItemCountChange}
              quantity={item.quantity}
            />
            <button
              type="button"
              className="add-to-cart"
              onClick={handleAddToCartClick}
              relitemid={item.id}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
