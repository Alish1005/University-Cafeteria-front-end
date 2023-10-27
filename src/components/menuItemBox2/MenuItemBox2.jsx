import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

import "./menuItemBox2.css";

function MenuItemBox2(props) {
  const { item, cart, setCart } = props;
  const [count, setCount] = useState(1);
  const [Iquantity, setIQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  // Function to handle adding the item to the cart
  // item.map((item) => (
  //   <div key={item.id}>
  //     <h3>{item.name}</h3>
  //     <p>Price: ${item.price}</p>
  //     <p>Calories: ${item.calories}</p>
  //     <p>Quantity: ${item.quantity}</p>
  //     <p>Status: ${item.status}</p>
  //     <p>{item.description}</p>
  //   </div>
  // ));
  //ADD Item to the Order List
  const addToCart = (s) => {
    const found = cart.filter((item) => item.id == s.id);
    if (found.length == 0) {
      const data = { ...s, Iquantity: count, note: notes };
      setCart((prevArray) => [...prevArray, data]);
    } else {
      //const i=orderlist.filter((item)=>item.id==s.id)[0];
      const ind = cart.map((i) => i.id).indexOf(s.id);
      console.log(ind);
      const i = cart[ind];
      console.log(i);
      const noti = cart.filter((item, index) => index < ind);
      const noti2 = cart.filter((item, index) => index > ind);
      i.Iquantity = Iquantity;
      setCart([...noti, i, ...noti2]);
      console.log(cart);
    }
  };

  return (
    <div className="menuItemBox col-lg-3 col-md-4 col-sm-10 my-3">
      <img
        className="MenuItemBoxImg m-1 mb-3 rounded"
        src={item.photo}
        alt=""
      />
      {item.publishDate > new Date().setDate(new Date().getDate() - 7) && (
        <span class="newspan badge bg-danger">New</span>
      )}
      {item.quantity < 1 && (
        <span class="newspan badge bg-secondary text-primary">
          out of stock
        </span>
      )}
      <h5>{item.name}</h5>
      {item.description != "-" && item.description != null ? (
        <p>{item.description}</p>
      ) : (
        <br />
      )}
      <p>
        <strong>{item.price}$</strong>
      </p>
      {item.quantity < 1 ? (
        <button className="btn btn-primary" disabled>
          <AddShoppingCartIcon /> Add to cart
        </button>
      ) : (
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#${item.id}`}
        >
          <AddShoppingCartIcon /> Add to cart
        </button>
      )}

      {/*---------Item PoP ----------- */}
      <div
        class="modal fade"
        id={item.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hiddden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {item.name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img
                className="AddItemBoxImg menupopimg m-2 mb-3 rounded"
                src={item.photo}
                style={{ width: "90%" }}
                alt=""
              />
              {item.description != "-" && item.description != null && (
                <p>{item.description}</p>
              )}
              {/*Minus Button */}
              {count <= 1 ? (
                <button className="btn-count btn btn-primary" disabled={true}>
                  <RemoveIcon />{" "}
                </button>
              ) : (
                <button
                  className="btn-count btn btn-primary"
                  onClick={() => setCount(count - 1)}
                >
                  <RemoveIcon />{" "}
                </button>
              )}
              {/*quantity input */}
              <input
                type="number"
                className="input-count text-center border-1"
                placeholder="quantity"
                value={count}
                min={1}
                max={item.quantity}
                onChange={(e) => setIQuantity(e.target.value)}
              />
              {/*plus button*/}
              {count >= item.quantity ? (
                <button className="btn-count btn btn-primary" disabled={true}>
                  <AddIcon />{" "}
                </button>
              ) : (
                <button
                  className="btn-count btn btn-primary"
                  onClick={() => setCount(count + 1)}
                >
                  <AddIcon />{" "}
                </button>
              )}{" "}
              <br />
              {/*Notes Input */}
              <input
                type="text"
                value={notes}
                className="input-note-pop m-3 p-2"
                placeholder="Notes"
                onChange={(n) => setNotes(n.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => addToCart(item)}
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                <AddShoppingCartIcon /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemBox2;
