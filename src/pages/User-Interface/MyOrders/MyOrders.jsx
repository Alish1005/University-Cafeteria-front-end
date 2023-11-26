import { SpaRounded } from "@mui/icons-material";
import MyOrderBox from "../../../components/myorderbox/MyOrderBox";
import "./myOrders.css";
import ReplayIcon from "@mui/icons-material/Replay";
import { useState, useEffect } from "react";
import axios from "axios";
import { variables } from "../../Variables";
function MyOrders(props) {
  const { item, cart, setCart, order_items, order_offers } = props;
  const [total, setTotal] = useState(0);

  const order = {
    id: 0,
    status: variables.order_incomplete,
    del_Room: "0000",
    order_item: order_items,
    order_offer: order_offers,
    TotalPrice: total,
  };

  axios.get(`${variables.API_URL}order`, order).then((result) => {
    const s = result.data.filter((i) => i.id == cart.id);
    setCart(s);
  });

  return (
    <div className="MyOrders container-lg mb-5">
      <h3> My Orders </h3>
      <div className="row">
        {cart.map((item) => (
          <MyOrderBox
            setCart={props.setCart}
            cart={props.cart}
            item={item}
            action={
              <span>
                <ReplayIcon /> Re-Order
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
