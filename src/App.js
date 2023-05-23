
import { Fragment, useState, useContext, useEffect } from "react";
import Header from "./component/Header/Header";
import CandyForm from "./component/medicine/CandyForm";
import Cart from "./component/Cart/Cart";
import CartContext from "./component/Store/CartContext";
import DisplayList from "./component/medicine/DisplayList";
import CartProvider from "./component/Store/CartProvider";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [list, setList] = useState([]);

  const cartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const saveData = (order) => {
    setList([...list, order]);
  };
  // {console.log(saveData)}

  

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={cartHandler} />
      <main>
        <CandyForm onSaveData={saveData} />
      </main>
      <DisplayList items={list} />
    </CartProvider>
  );
}