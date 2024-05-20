/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from "react";
const Cart = ({ isLoggedIn}) => {


    useEffect(() => {
        document.title = "Cart"
      }, [])

  return (
    <div style={{ textAlign: "center" }}>
       {isLoggedIn ? (
          <>
            <span>Add to cart</span>
          </>
        ) : (
          <>
            <h1>Login to add to cart</h1>
          </>
        )}
    </div>
  );
};

export default Cart;

