import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber 
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        {" "}
        <CartIcon />{" "}
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;