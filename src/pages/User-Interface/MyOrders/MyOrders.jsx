import { SpaRounded } from "@mui/icons-material";
import MyOrderBox from "../../../components/myorderbox/MyOrderBox";
import "./myOrders.css";
import ReplayIcon from "@mui/icons-material/Replay";
import { useState, useEffect } from "react";

function MyOrders(props) {
  const { item, cart, setCart, orderlist } = props;
  // const [orderlist, setOrderlist] = useState([]);
  const [total, setTotal] = useState(0);

  //ADD Item to the Order List
  // const addItem = (s) => {
  //   const found = orderlist.filter((item) => item.id == s.id);
  //   if (found.length == 0) {
  //     const data = { ...s, Iquantity: 1 };
  //     setOrderlist((prevArray) => [...prevArray, data]);
  //   } else {
  //     //const i=orderlist.filter((item)=>item.id==s.id)[0];
  //     const ind = orderlist.map((i) => i.id).indexOf(s.id);
  //     console.log(ind);
  //     const i = orderlist[ind];
  //     console.log(i);
  //     const noti = orderlist.filter((item, index) => index < ind);
  //     const noti2 = orderlist.filter((item, index) => index > ind);
  //     const q = i.Iquantity + 1;
  //     i.Iquantity = q;
  //     setOrderlist([...noti, i, ...noti2]);
  //   }
  //   setTotal(total + s.price);
  //   // refresh();
  // };
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
