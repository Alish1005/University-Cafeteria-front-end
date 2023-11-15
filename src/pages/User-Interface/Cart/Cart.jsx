import React from "react";
import "./Cart.css";
import { type, dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Space, TimePicker } from "antd";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import axios from "axios";
import { variables } from "../../Variables";
import Modal from "react-modal";

function Cart(props) {
  const { cart, setCart, Iquantity } = props;
  const [total, setTotal] = useState(0);
  // const [notes, setNotes] = useState("");
  // const [count, setCount] = useState(1);
  const [orderlist, setOrderlist] = useState([]);

  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  //Refresh
  const refresh = async () => {
    //Save items
    cart.map((item) => {
      setTotal(total + item.price * item.Iquantity);
    });
  };
  useEffect(() => {
    refresh();
  }, []);

  const deleteFromCart = (itemId) => {
    const updatedCart = props.cart.filter((item) => item.id !== itemId);
    const deletedItem = props.cart.filter((i) => i.id == itemId)[0];
    setTotal(total - deletedItem.Iquantity * deletedItem.price);
    props.setCart(updatedCart);
  };

  const PlaceOrder = (s) => {
    const found = orderlist.filter((item) => item.id == s.id);
    if (found.length == 0) {
      const data = { ...s, Iquantity: 1 };
      setOrderlist((prevArray) => [...prevArray, data]);
    } else {
      //const i=orderlist.filter((item)=>item.id==s.id)[0];
      const ind = orderlist.map((i) => i.id).indexOf(s.id);
      console.log(ind);
      const i = orderlist[ind];
      console.log(i);
      const noti = orderlist.filter((item, index) => index < ind);
      const noti2 = orderlist.filter((item, index) => index > ind);
      const q = i.Iquantity + 1;
      i.Iquantity = q;
      setOrderlist([...noti, i, ...noti2]);
    }
    setTotal(total + s.price);
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
              <th scope="col">Calories</th>
              <th scope="col">Total</th>
              <th scope="col">Notes</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.Iquantity}</td>
                <td>{item.calories}</td>
                <td>{item.Iquantity * item.price}</td>
                <td>{item.note}</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    id="delete"
                    className="btn btn-danger"
                    onClick={() => deleteFromCart(item.id)}
                  >
                    Delete
                  </button>
                </td>
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
          onClick={() => PlaceOrder()}
        >
          <SendIcon /> Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
