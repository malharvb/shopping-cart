import React, { useEffect, useState } from 'react';
import '../styles/shoppage.css';

function ShopPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const sortData = (itemsList) => itemsList.filter((item) => item.category !== 'electronics');

    const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products/');
      const itemsList = await data.json();
      const sortedItemsList = sortData(itemsList);
      console.log(sortedItemsList);
      setItems(sortedItemsList);
    };

    fetchData();
  }, []);

  return (
    <div className="items-display">
      {items.map((item) => (
        <div key={item.id} className="item">
          <img src={item.image} alt={item.description} />
          <div className="item-title">{item.title}</div>
          <div className="sub-wrapper">
            <div className="item-price">
              $
              {item.price}
            </div>
            <button type="button" className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopPage;
