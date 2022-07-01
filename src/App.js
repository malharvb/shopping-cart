import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import ItemPage from './components/ItemPage';
import Cart from './components/Cart';
import './styles/reset.css';

function App() {
  const [isItemAdded, setItemAdded] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [itemsList, setItemsList] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://fakestoreapi.com/products/');
      const returnedItemsList = await data.json();
      const updatedItemsList = returnedItemsList.map((item) => ({ ...item, quantity: 1 }));
      setItemsList(updatedItemsList);
    }

    fetchData();
  }, []);

  useEffect(() => {
    function calculateTotalQuantity() {
      const total = cartItems.reduce((accumulator, object) => accumulator + object.quantity, 0);
      setTotalQuantity(total);
    }

    calculateTotalQuantity();
  }, [cartItems]);

  const onItemCountChange = (count, id) => {
    const newState = itemsList.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: count };
      }
      return item;
    });

    setItemsList(newState);
  };

  const itemRepeatAddCheck = (id) => {
    const isFound = cartItems.some((element) => {
      if (element.id === id) {
        return true;
      }
      return false;
    });
    return isFound;
  };

  const itemRepeatAdd = (id, itemToBeAdded) => {
    const newState = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + itemToBeAdded.quantity };
      }
      return item;
    });
    setCartItems(newState);
  };

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = Number(e.target.getAttribute('relitemid'));
    const [itemToBeAdded] = itemsList.filter((item) => item.id === id);

    if (!itemRepeatAddCheck(id)) {
      setItemAdded(1);
      setCartItems((prevState) => prevState.concat(itemToBeAdded));
    } else {
      itemRepeatAdd(id, itemToBeAdded);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar isItemAdded={isItemAdded} totalQuantity={totalQuantity} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={
              !itemsList ? <div>Loading...</div> : (
                <ShopPage
                  handleAddToCartClick={handleAddToCartClick}
                  itemsList={itemsList}
                  onItemCountChange={onItemCountChange}
                />
              )
            }
          />
          <Route
            path="/shop/:id/"
            element={
              !itemsList ? <div>Loading...</div> : (
                <ItemPage
                  handleAddToCartClick={handleAddToCartClick}
                  itemsList={itemsList}
                  onItemCountChange={onItemCountChange}
                />
              )
}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} itemsList={itemsList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
