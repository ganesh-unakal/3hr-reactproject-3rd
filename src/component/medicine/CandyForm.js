import React, { useRef, useContext, useEffect } from "react";
import classes from "./CandyForm.module.css";
import Card from "../UI/Card";
import CartContext from "../Store/CartContext";

const CandyForm = (props) => {
  const inputName = useRef()
  const inputDesc = useRef()
  const inputPrice = useRef()
  


  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = inputName.current.value
    const enteredDesc = inputDesc.current.value
    const enteredPrice = inputPrice.current.value
   

    const order = {
      name: enteredName,
      description: enteredDesc,
      price: enteredPrice,
     
    };
    props.onSaveData(order);
    console.log(order);

    fetch(
      "https://crudcrud.com/api/d1752fdeccff40ac860265280b1cceca/product",
      {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <label className={classes.f1}>Candy Name:</label>
        <input type="text" ref={inputName} />

        <label className={classes.f1}>Description:</label>
        <input type="text" ref={inputDesc} />

        <label className={classes.f1}>price:</label>
        <input type="number" ref={inputPrice} />


        <button className={classes.f2}>Add TO List</button>
      </form>
    </Card>
  );
};

export default CandyForm;