import React, { useEffect, useState } from 'react';
import '../styles/itemcount.css';

function ItemCount({ relitemid, onItemCountChange, quantity }) {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    onItemCountChange(count, relitemid);
  }, [count]);

  const handleCountModifierClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.textContent === '+') {
      if (count > 8) return;
      setCount((prevCount) => (prevCount + 1));
    } else {
      if (count === 1) return;
      setCount((prevCount) => (prevCount - 1));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="item-count-cont">
      <button
        type="button"
        className="item-count-modifier"
        relitemid={relitemid}
        onClick={handleCountModifierClick}
      >
        -

      </button>
      <input
        type="number"
        className="item-count"
        onClick={handleClick}
        onChange={onItemCountChange}
        value={count}
      />
      <button
        type="button"
        className="item-count-modifier"
        relitemid={relitemid}
        onClick={handleCountModifierClick}
      >
        +

      </button>
    </div>
  );
}

export default ItemCount;
