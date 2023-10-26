import React from "react";
import "./Cart.css";
import { type, dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Space, TimePicker } from "antd";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import axios from "axios";
import { variables } from "../../Variables";

function Cart(props) {
  const {cart,setCart}=props;
  const [total, setTotal] = useState(0);

  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
//Refresh
  const refresh = () => {
    //Save items
    cart.map((item) => {
      setTotal(total + item.price * item.Iquantity);
    });
  };
  useEffect(() => {
    refresh();
  }, []);

  const deleteFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const disabledHours = () => {
    //Disable Time
    let currentHour = new Date().getHours();
    if (currentHour < 8) {
      currentHour = 8;
    }
    //Slice
    return [
      ...[...Array(24).keys()].slice(0, currentHour),
      ...[...Array(24).keys()].slice(17, 24),
    ]; // Disable hours after the current hour
  };

  // Define a function to disable minutes (e.g., disable minutes after 30)
  //!!!!!!!!!!!!!FIX THE LOGIC ERROR!!!!!!!!!!!!!
  const disabledMinutes = () => {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    if (currentHour === 18) {
      // If it's 18:00, disable all minutes after the current minute
      return [...Array(60).keys()].slice(0, currentMinute);
    }

    return []; // Disable no minutes by default
  };
  return (
    <div className="cartbiv">
      <div className="heading text-primary bg-secondary">
        <h3>&mdash; Cart &mdash;</h3>
      </div>
      <div id="table">
        <table className="carttable table table-striped">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Calories</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.Iquantity}</td>
                <td></td>
                <td>{item.calories}</td>
                <button type="button" id="delete" className="btn btn-danger">
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="text-start  ms-5">Total Price: {total}$</h4>
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onChange}
        order={true}
        disabledHours={disabledHours}
        disabledMinutes={disabledMinutes}
        presetsMaxWidth={10}
      />
      <input
        type="text"
        className="input-delv"
        maxLength={4}
        placeholder="Delivery Room"
      />
      <div className="cart_footer">
        <button
          type="button"
          id="order_btn"
          className="btn-send btn btn-primary text-center p-3 "
        >
          <SendIcon /> Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
