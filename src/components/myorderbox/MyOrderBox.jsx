import { PeopleSharp } from "@mui/icons-material";
import "./myorderbox.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import $ from "jquery";
import { useState, useEffect } from "react";

let bg_main = "bg-light";
let bg_primary = "bg-light";
let bg_secondary = "bg-primary";
let text_primary = "text-light";
let text_secondary = "text-black";
let btn_primary = "btn-outline-secondary";
let btn_secondary = "btn-outline-primary";
let table_primary = "table-secondary";
let table_secondary = "table-dark";

let complete = "complete";
let incomplete = "loading";
let cancel = "canceled";
let delivered = "delivered";

function MyOrderBox(props) {
  const { item, cart } = props;
  //const {setOrderStatus}=useState("");

  const cancelOrder = () => {
    const orderStatus = props.status;
    if (orderStatus == incomplete) {
      orderStatus = cancel;
      <span class="myOrderbadge badge bg-danger">canceled</span>;
    } else if ((orderStatus = complete)) {
      $("#orderCancellation").prop("disabled", true);
      // toast({
      //   title:"This action can't be done"
      // })
    }
  };
  return (
    <div
      className={`myOrderbox col-lg-5 col-xs-11 col-sm-11 col-md-5 m-md-4 m-lg-2 mx-sm-0 my-sm-3 my-xs-2 p-0 border shadow ${bg_main}`}
    >
      <div>
        {props.status == cancel ? (
          <span class="myOrderbadge badge bg-danger">canceled</span>
        ) : props.status == complete ? (
          <span class="myOrderbadge badge bg-success">complete</span>
        ) : props.status == incomplete ? (
          <span class="myOrderbadge badge bg-info">loading...</span>
        ) : (
          <span class="myOrderbadge badge bg-primary">Delivered</span>
        )}

        <div
          className={`d-flex justify-content-between pt-3 px-3 ${text_secondary}`}
        >
          <h5># Order {props.data.id}</h5>
          <span>{props.date}</span>
          {props.status == incomplete && (
            <div class="dropdown">
              <div
                class=""
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <MoreVertIcon className="icon" />
              </div>
              <ul class={`dropdown-menu bg-secondary`}>
                <li>
                  <a class="dropdown-item text-primary mt-1" href="#">
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item bg-danger rounded-bottom" href="#">
                    <button id="orderCancellation" onClick={cancelOrder}>
                      Cancel Order
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="boxItem my-4">
          <table
            className={`table pt-3 ${table_primary} ${text_secondary} table-hover table-striped-gray`}
          >
            <thead>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Calories</th>
              <th>Total</th>
              <th>Notes</th>
            </thead>

            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.Iquantity}</td>
                <td>{item.calories}</td>
                <td>{item.Iquantity * item.price}$</td>
                <td className="text-danger">{item.note}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className={`d-flex justify-content-between ${text_secondary} m-3`}>
          <h5 className="fw-bold">Total Price : {props.data.total}$</h5>
          <button className={`btn ${btn_secondary} fw-bold p-2 mx-1`}>
            {props.action}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyOrderBox;
