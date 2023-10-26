import "./menuItemBox.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

function MenuItemBox(props) {
    const { item } = props;
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);

  // Function to handle adding the item to the cart
  const addToCart = () => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      //add new attr.s in the Menu for each Item (Iquantity and notes)
      notes: document.querySelector(".input-note-pop").value,
    };

    setCart([...cart, newItem]);

    // Close the modal after adding to cart
    document.querySelector(`#${item.id}`).classList.remove("show");
    document.querySelector(".modal-backdrop").remove();

    // Reset count and notes
    setCount(1);
    document.querySelector(".input-note-pop").value = "";
  };

  return (
    <div className="menuItemBox col-lg-3 col-md-4 col-sm-10 my-3 border rounded p-2 mx-2">
<img className="MenuItemBoxImg m-1 mb-3 rounded" src={item.photo} alt="" />
            {true && <span class="newspan badge bg-danger">New</span>}
            {item.quantity<1 && <span class="newspan badge bg-secondary text-primary">out of stock</span>}
            <h5>{item.name}</h5>
            {item.description!="-" && item.description!=null ? <p>{item.description}</p>:<br/>}
            <p><strong>{item.price}$</strong></p>
            {item.quantity<1 ? <button className="btn btn-primary" disabled><AddShoppingCartIcon/> Add to Cart</button>:<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${item.id}`}><AddShoppingCartIcon/> Add to Cart</button>}

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
                style={{width:"90%"}}
                alt=""
              />
              {item.description!="-" && item.description!=null && <p>{item.description}</p>}
              {/*Minus Button */}
              {count<=1 ?
               <button
               className="btn-count btn btn-primary"
               disabled={true} ><RemoveIcon />{" "}
                </button>
              :               
              <button
                className="btn-count btn btn-primary"
                onClick={() => setCount(count - 1)}
              ><RemoveIcon />{" "}
              </button>}
              {/*quantity input */}
              <input
                type="number"
                className="input-count text-center border-1"
                placeholder="quantity"
                value={count}
                min={1}
                max={item.quantity}
              />
              {/*plus button*/}
              {count>=item.quantity ?
               <button
               className="btn-count btn btn-primary"
               disabled={true} ><AddIcon />{" "}
                </button>
              :               
              <button
                className="btn-count btn btn-primary"
                onClick={() => setCount(count + 1)}
              ><AddIcon />{" "}
              </button>}

                {" "}

              <br />
              {/*Notes Input */}
              <input
                type="text"
                className="input-note-pop m-3 p-2"
                placeholder="Notes"
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
              <button type="button" class="btn btn-primary" onClick={addToCart}>
                <AddShoppingCartIcon /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemBox;