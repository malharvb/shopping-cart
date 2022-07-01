import React, { useEffect, useState } from 'react';
import StyledLink from '../util/StyledLink';
import ShopPageItem from './ShopPageItem';
import '../styles/shoppage.css';

function ShopPage({ handleAddToCartClick, itemsList, onItemCountChange }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const sortData = (itemsListCopy) => itemsListCopy.filter((item) => item.category !== 'electronics');

    const sortedItemsList = sortData(itemsList);

    setItems(sortedItemsList);
  }, []);

  return (
    <div className="items-display">
      {items.map((item) => (
        <StyledLink to={`/shopping-cart/shop/${item.id}/`} key={item.id}>
          <ShopPageItem
            item={item}
            handleAddToCartClick={handleAddToCartClick}
            onItemCountChange={onItemCountChange}
          />
        </StyledLink>
      ))}
    </div>
  );
}

export default ShopPage;
